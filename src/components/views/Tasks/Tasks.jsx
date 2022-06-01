import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useResize } from "../../../hooks/useResize";
import "react-loading-skeleton/dist/skeleton.css";
import "./Tasks.styles.css";
import Header from "../../Header/Header";
import Card from "../../Card/Card";
import TaskForm from "../../TaskForm/TaskForm";

const { REACT_APP_API_ENDPOINT } = process.env;

const Tasks = () => {
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(false);
  const { isPhone } = useResize();

  useEffect(() => {
    setLoading(true);
    fetch(`${REACT_APP_API_ENDPOINT}/task`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setList(data.result);
        setTimeout(() => {
          setLoading(false);
        }, 4000);
      });
  }, []);

  const renderAllCards = () => {
    return list?.map((data) => <Card key={data._id} data={data} />);
  };

  const renderNewCards = () => {
    return list
      ?.filter((data) => data.status === "NEW")
      .map((data) => <Card key={data._id} data={data} />);
  };

  const renderInProgressCards = () => {
    return list
      ?.filter((data) => data.status === "IN PROGRESS")
      .map((data) => <Card key={data._id} data={data} />);
  };

  const renderFinishedCards = () => {
    return list
      ?.filter((data) => data.status === "FINISHED")
      .map((data) => <Card key={data._id} data={data} />);
  };

  return (
    <>
      <Header />
      <main id="tasks">
        <TaskForm />
        <section className="wrapper_list">
          <div className="list_header">
            <h2>Mis tareas</h2>
          </div>
          {isPhone ? (
            !list?.length ? (
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
              {!list?.length ? (
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
                    {renderNewCards()}
                  </div>
                  <div className="list">
                    <h4>En proceso</h4>
                    {renderInProgressCards()}
                  </div>
                  <div className="list">
                    <h4>Finalizadas</h4>
                    {renderFinishedCards()}
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
