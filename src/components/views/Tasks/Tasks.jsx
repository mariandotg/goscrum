import { useEffect, useState } from "react";
import "./Tasks.styles.css";
import Header from "../../Header/Header";

const Tasks = () => {
  const [isPhone, setIsPhone] = useState(
    window.innerWidth < 900 ? true : false
  );

  const handleResize = () => {
    if (window.innerWidth < 900) setIsPhone(true);
    else setIsPhone(false);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const limitString = (string) => {
    if (string.length > 370) {
      return { string: string.slice(0, 367).concat("..."), addButton: true };
    }
    return { string, addButton: false };
  };

  return (
    <>
      <Header />
      <main id="tasks">
        <section className="wrapper_list">
          <div className="list_header">
            <h2>Mis tareas</h2>
          </div>
          {isPhone ? (
            <div className="list phone">
              <div className="card">
                <div className="close">X</div>
                <h3>Tarea 1</h3>
                <h6>24/1/2022 16:40hs</h6>
                <h5>Julio Avantt</h5>
                <button type="button">Nueva</button>
                <button type="button">Alta</button>
                <p>
                  {
                    limitString(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  eius suscipit, ipsam voluptatem nulla ut? Consequatur quod
                  velit doloremque nihil earum, voluptates, itaque, possimus
                  nobis quasi modi qui veritatis unde?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  eius suscipit, ipsam voluptatem nulla ut? Consequatur quod
                  velit doloremque nihil earum, voluptates, itaque, possimus
                  nobis quasi modi qui veritatis unde?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  eius suscipit, ipsam voluptatem nulla ut? Consequatur quod
                  velit doloremque nihil earum, voluptates, itaque, possimus
                  nobis quasi modi qui veritatis unde?`).string
                  }
                </p>
              </div>
              <div className="card">
                <div className="close">X</div>
                <h3>Tarea 1</h3>
                <h6>24/1/2022 16:40hs</h6>
                <h5>Julio Avantt</h5>
                <button type="button">Nueva</button>
                <button type="button">Alta</button>
                <p>Descripción</p>
              </div>
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
