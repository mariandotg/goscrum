import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import debounce from "lodash.debounce";
import { useSelector, useDispatch } from "react-redux";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import "react-loading-skeleton/dist/skeleton.css";
import "./Tasks.styles.css";
import { getTasks, deleteTask, editTaskStatus } from "../../../store/actions/tasksActions";
import { useResize } from "../../../hooks/useResize";
import Header from "../../Header/Header";
import Card from "../../Card/Card";
import TaskForm from "../../TaskForm/TaskForm";

const Tasks = () => {
  const [tasksFromWho, setTasksFromWho] = useState("ALL");
  const [list, setList] = useState(null);
  const [renderList, setRenderList] = useState(null);
  const [search, setSearch] = useState("");
  const { isPhone } = useResize();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks(tasksFromWho === "ME" ? "/me" : ""));
  }, [tasksFromWho]);

  const { loading, tasks, error } = useSelector((state) => {
    return state.tasksReducer;
  });

  useEffect(() => {
    if (tasks?.length) {
      setList(tasks);
      setRenderList(tasks);
    }
  }, [tasks]);

  useEffect(() => {
    if (search) {
      setRenderList(list.filter((data) => data.title.startsWith(search)));
    } else {
      setRenderList(list);
    }
  }, [search]);

  if (error) return <div>Hay un error</div>;

  const renderAllCards = () => {
    return renderList?.map((data) => (
      <Card key={data._id} data={data} deleteCard={handleDelete} editCardStatus={handleEditCardStatus}/>
    ));
  };

  const renderColumnCards = (text) => {
    return renderList
      ?.filter((data) => data.status === text)
      .map((data) => (
        <Card key={data._id} data={data} deleteCard={handleDelete} editCardStatus={handleEditCardStatus}/>
      ));
  };

  const handleChangeImportance = (event) => {
    if (event.currentTarget.value === "ALL") setRenderList(list);
    else
      setRenderList(
        list.filter((data) => data.importance === event.currentTarget.value)
      );
  };

  const handleSearch = debounce((event) => {
    setSearch(event?.target?.value);
  }, 1000);

  const handleDelete = (id) => dispatch(deleteTask(id));

  const handleEditCardStatus = (data) => dispatch(editTaskStatus(data));

  return (
    <>
      <Header />
      <main id="tasks">
        <TaskForm />
        <section className="wrapper_list">
          <div className="list_header">
            <h2>Mis tareas</h2>
          </div>
          <div className="filters">
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                onChange={(event) => setTasksFromWho(event.currentTarget.value)}
              >
                <FormControlLabel
                  value="ALL"
                  control={<Radio />}
                  label="Todas"
                />
                <FormControlLabel
                  value="ME"
                  control={<Radio />}
                  label="Mis tareas"
                />
              </RadioGroup>
            </FormControl>
            <div className="search">
              <input
                type="text"
                placeholder="Buscar por titulo..."
                onChange={handleSearch}
              />
            </div>
            <select name="importance" onChange={handleChangeImportance}>
              <option value="">Seleccionar una prioridad</option>
              <option value="ALL">Todas</option>
              <option value="LOW">Baja</option>
              <option value="MEDIUM">Media</option>
              <option value="HIGH">Alta</option>
            </select>
          </div>
          {isPhone ? (
            !renderList?.length ? (
              <div>No hay tareas creadas</div>
            ) : loading ? (
              <>
                <Skeleton height={90} />
                <Skeleton height={90} />
                <Skeleton height={90} />
              </>
            ) : (
              <div className="list phone">{renderAllCards()}</div>
            )
          ) : (
            <div className="list_group">
              {!renderList?.length ? (
                <div>No hay tareas creadas</div>
              ) : loading ? (
                <>
                  <Skeleton height={90} />
                  <Skeleton height={90} />
                  <Skeleton height={90} />
                </>
              ) : (
                <>
                  <div className="list">
                    <h4>Nuevas</h4>
                    {renderColumnCards("NEW")}
                  </div>
                  <div className="list">
                    <h4>En proceso</h4>
                    {renderColumnCards("IN PROGRESS")}
                  </div>
                  <div className="list">
                    <h4>Finalizadas</h4>
                    {renderColumnCards("FINISHED")}
                  </div>
                </>
              )}
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default Tasks;
