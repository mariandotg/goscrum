import { useFormik } from "formik";

const Register = () => {
  const initialValues = {
    userName: "",
    email: "",
    password: "",
    role: "",
    continent: "",
    region: "",
  };

  const onSubmit = () => {
    alert();
  };

  const formik = useFormik({ initialValues, onSubmit });
  const { handleSubmit, handleChange, values, errors } = formik;

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Registro</h1>
        <div>
          <label>Nombre de usuario</label>
          <input
            name="userName"
            type="text"
            value={values.userName}
            onChange={handleChange}
          />
          {errors.userName && <div>{errors.userName}</div>}
        </div>
        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <div>{errors.email}</div>}
        </div>
        <div>
          <label>Contraseña</label>
          <input
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <div>{errors.password}</div>}
        </div>
        <input type="hidden" name="teamID" value="teamid" />
        <div>
          <label>Rol</label>
          <select name="role" value={values.role} onChange={handleChange}>
            <option value="Team leader">Team leader</option>
            <option value="Team member">Team member</option>
          </select>
          {errors.role && <div>{errors.role}</div>}
        </div>
        <div>
          <label>Continente</label>
          <select
            name="continent"
            value={values.continent}
            onChange={handleChange}
          >
            <option value="America">America</option>
            <option value="Europa">Europa</option>
            <option value="Otro">Otro</option>
          </select>
          {errors.continent && <div>{errors.continent}</div>}
        </div>
        <div>
          <label>Región</label>
          <select name="region" value={values.region} onChange={handleChange}>
            <option value="Latam">Latam</option>
            <option value="Brasil">Brasil</option>
            <option value="America del Norte">America del Norte</option>
            <option value="Otro">Otro</option>
          </select>
          {errors.region && <div>{errors.region}</div>}
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
