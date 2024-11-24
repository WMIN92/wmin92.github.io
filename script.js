window.onload = function() {
  // Obtener el elemento del input de fecha
  var fechaInput = document.getElementById("fecha-compra");

  // Crear un objeto de fecha con la fecha actual
  var fechaActual = new Date();

  // Obtener el día, mes y año, y asegurarnos de que estén en formato dd/mm/yyyy
  var dia = ("0" + fechaActual.getDate()).slice(-2); // Asegura que el día tenga dos dígitos
  var mes = ("0" + (fechaActual.getMonth() + 1)).slice(-2); // Los meses comienzan desde 0
  var anio = fechaActual.getFullYear();

  // Asignar la fecha al input
  fechaInput.value = dia + "/" + mes + "/" + anio;
};
