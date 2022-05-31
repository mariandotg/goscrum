import Swal from "sweetalert2";

const swal = () => {
  Swal.fire({
    title: "Credenciales inválidas",
    text: "Por favor introduzca credenciales válidas",
    confirmButtonText: "Aceptar",
    width: "400px",
    timer: 10000,
    timerProgressBar: true,
  });
};

export default swal;
