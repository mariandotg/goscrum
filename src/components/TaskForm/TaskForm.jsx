import { useFormik } from "formik";
import "./TaskForm.styles.css";
import * as Yup from "yup";

const TaskForm = () => {
  const initialValues = {
    title: "",
    status: "",
    priority: "",
    description: "",
  };

  const required = "* Campo obligatorio";

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(6, "La cantidad mínima de caracteres es 6")
      .required(required),
    status: Yup.string().required(required),
    priority: Yup.string().required(required),
  });

  const onSubmit = () => {
    alert();
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, handleBlur, errors, touched } = formik;

  return (
    <section className="task-form">
      <h2>Crear tarea</h2>
      <p>Crea tus tareas</p>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              name="title"
              placeholder="Titulo"
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.title ? "error" : ""}
            />
            {errors.title && touched.title && (
              <span className="error-message">{errors.title}</span>
            )}
          </div>
          <div>
            <select
              name="status"
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.status ? "error" : ""}
            >
              <option value="">Seleccionar un estado</option>
              <option value="new">Nueva</option>
              <option value="inProcess">En proceso</option>
              <option value="finished">Terminada</option>
            </select>
            {errors.status && touched.status && (
              <span className="error-message">{errors.status}</span>
            )}
          </div>
          <div>
            <select
              name="priority"
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.priority ? "error" : ""}
            >
              <option value="">Seleccionar una prioridad</option>
              <option value="low">Baja</option>
              <option value="medium">Media</option>
              <option value="high">Alta</option>
            </select>
            {errors.priority && touched.priority && (
              <span className="error-message">{errors.priority}</span>
            )}
          </div>
        </div>
        <div>
          <textarea
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Descripción"
          />
        </div>
        <button type="submit">Crear</button>
      </form>
    </section>
  );
};

export default TaskForm;
