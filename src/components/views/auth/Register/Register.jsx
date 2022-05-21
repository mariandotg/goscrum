import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "../Auth.styles.css";

const Register = () => {
  const initialValues = {
    userName: "",
    password: "",
    email: "",
    teamID: "",
    role: "",
    continent: "",
    region: "",
  };

  const required = "* Campo obligatorio";

  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .min(4, "La cantidad mínima de caracteres es 4")
      .required(required),
    password: Yup.string().required(required),
    email: Yup.string().email("Debe ser un email válido").required(required),
    teamID: Yup.string().required(required),
    role: Yup.string().required(required),
    continent: Yup.string().required(required),
    region: Yup.string().required(required),
  });

  const onSubmit = () => {
    alert();
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, handleBlur, errors, values, touched } =
    formik;

  return (
    <div className="auth">
      <form onSubmit={handleSubmit}>
        <h1>Registro</h1>
        <div>
          <label>Nombre de usuario</label>
          <input
            name="userName"
            type="text"
            value={values.userName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.userName && touched.userName ? "error" : ""}
          />
          {errors.userName && touched.userName && (
            <span className="error-message">{errors.userName}</span>
          )}
        </div>
        <div>
          <label>Contraseña</label>
          <input
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password ? "error" : ""}
          />
          {errors.password && touched.password && (
            <span className="error-message">{errors.password}</span>
          )}
        </div>
        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email ? "error" : ""}
          />
          {errors.email && touched.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>
        <input type="hidden" name="teamID" value="teamid" />
        <div>
          <label>Rol</label>
          <select
            name="role"
            value={values.role}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.role && touched.role ? "error" : ""}
          >
            <option value="">Seleccionar rol</option>
            <option value="Team leader">Team leader</option>
            <option value="Team member">Team member</option>
          </select>
          {errors.role && touched.role && (
            <span className="error-message">{errors.role}</span>
          )}
        </div>
        <div>
          <label>Continente</label>
          <select
            name="continent"
            value={values.continent}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.continent && touched.continent ? "error" : ""}
          >
            <option value="">Seleccionar continente</option>
            <option value="America">America</option>
            <option value="Europa">Europa</option>
            <option value="Otro">Otro</option>
          </select>
          {errors.continent && touched.continent && (
            <span className="error-message">{errors.userName}</span>
          )}
        </div>
        <div>
          <label>Región</label>
          <select
            name="region"
            value={values.region}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.region && touched.region ? "error" : ""}
          >
            <option value="">Seleccionar región</option>
            <option value="Latam">Latam</option>
            <option value="Brasil">Brasil</option>
            <option value="America del Norte">America del Norte</option>
            <option value="Otro">Otro</option>
          </select>
          {errors.region && touched.region && (
            <span className="error-message">{errors.region}</span>
          )}
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
        <div>
          <Link to="/login">Iniciar sesión</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
