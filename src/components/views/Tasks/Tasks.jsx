import { cardsData } from "./data";
import { useResize } from "../../../hooks/useResize";
import "./Tasks.styles.css";
import Header from "../../Header/Header";
import Card from "../../Card/Card";
import TaskForm from "../../TaskForm/TaskForm";

const Tasks = () => {
  const { isPhone } = useResize();

  const limitString = (string) => {
    if (string.length > 370) {
      return { string: string.slice(0, 367).concat("..."), addButton: true };
    }
    return { string, addButton: false };
  };

  const renderAllCards = () => {
    return cardsData.map((data) => <Card key={data.id} data={data} />);
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
            <div className="list phone">{renderAllCards()}</div>
          ) : (
            <div className="list_group">
              <div className="list">
                <h4>Nuevas</h4>
                <div className="card">
                  <div className="close">X</div>
                  <h3>Tarea 1</h3>
                  <h6>24/1/2022 16:40hs</h6>
                  <h5>Julio Avantt</h5>
                  <button type="button">Nueva</button>
                  <button type="button">Alta</button>
                  <p>Descripción</p>
                </div>
              </div>
              <div className="list">
                <h4>En proceso</h4>
                <div className="card">
                  <div className="close">X</div>
                  <h3>Tarea 1</h3>
                  <h6>24/1/2022 16:40hs</h6>
                  <h5>Julio Avantt</h5>
                  <button type="button">Nueva</button>
                  <button type="button">Alta</button>
                  <p>Descripción</p>
                </div>
              </div>
              <div className="list">
                <h4>Finalizadas</h4>
                <div className="card">
                  <div className="close">X</div>
                  <h3>Tarea 1</h3>
                  <h6>24/1/2022 16:40hs</h6>
                  <h5>Julio Avantt</h5>
                  <button type="button">Nueva</button>
                  <button type="button">Alta</button>
                  <p>Descripción</p>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default Tasks;
