import "./Tasks.styles.css";
import Header from "../../Header/Header";

const Tasks = () => {
  return (
    <>
      <Header />
      <main id="tasks">
        <section className="wrapper_list">
          <div className="list_header">
            <h2>Mis tareas</h2>
          </div>
          <div className="list">
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
        </section>
      </main>
    </>
  );
};

export default Tasks;
