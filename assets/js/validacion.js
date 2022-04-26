$(document).ready(function () {


  jQuery.validator.addMethod("letras", function(value, element) {
      return this.optional(element) || /^[a-zA-Z ]+$/i.test(value);
    }, "Debe tener solo letras");


$("#formulario").validate({
rules: {
  rut: {
    required: true,
    number: true,
    minlength: 8,
    maxlength: 8,
  },
  digito: {
    required:   function () {
      if (
        $("#digito").val() == "k" ||
        $("#digito").val() <= 9 &&
        $("#digito").val() >= 0
      ) {
          let mensaje = document.getElementById("error");
          if ( $("#digito").val() > 0 ||  $("#digito").val() == ""){
              
              mensaje.innerHTML = "";
          }
      }else {
          let mensaje = document.getElementById("error");
        mensaje.innerHTML = "Ingrese un digito del 0 a el 9 o una letra k";
      }
  },
    minlength: 1,
    maxlength: 1,
  },
  nombre: {
    required: true,
    minlength: 3,
    maxlength: 50,
    letras: true,
  },
  apellido: {
    required: true,
    minlength: 3,
    maxlength: 50,
    letras: true,
  },
  direccion: {
    required: true,
    minlength: 3,
    maxlength: 100,
  },
  modelo:{
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  ano:{
    required: true,
    number:true,
    minlength:4,
    maxlength: 4
  }
},
messages: {
  rut: {
    required: "Ingrese su rut",
    minlength: "Debe contener 8 digitos numericos sin espacios",
    maxlength: "Solo debe contener 8 digitos númericos sin espacios",
    number: "Solo debe contener numeros sin espacios",
  },
  digito: {
    required: "Agregue DV",
    minlength: "Debe agregar su digito verificador",
    maxlength: "Solo debe contener 1 caracter",
  },
  nombre: {
    required: "Ingrese su nombre",
    minlength: "Debe tener al menos 3 caracteres",
    maxlength: "No puede tener mas de 50 caracteres",
    
  },
  apellido: {
    required: "Ingrese su apellido",
    minlength: "Debe tener al menos 3 caracteres",
    maxlength: "No puede tener mas de 50 caracteres"
  },
  direccion: {
    required: "Ingrese su dirección",
    minlength: "Debe tener al menos 3 caracteres",
    maxlength: "No puede exceder los 100 caracteres",
  },
  modelo: {
    required: "Ingrese su modelo",
    minlength: "Debe tener mas de 3 caracteres",
    maxlength: "No puede tener mas de 50 caracteres",
  },
  ano: {
    required: "Ingrese un año valido",
    number: "Debe ser solo Números",
    minlength: "Debe tener 4 caracteres",
    maxlength: "No puede tener mas de 4 caracteres",
  }
},
submitHandler: function () {
  if (
    $("#digito").val() == "k" ||
    $("#digito").val() <= 9 &&
    $("#digito").val() >= 0
  ) {
      let mensaje = document.getElementById("error");
      if ( $("#digito").val() > 0 ||  $("#digito").val() == ""){
          
          mensaje.innerHTML = "";
      }
  } else {
      let mensaje = document.getElementById("error");
    mensaje.innerHTML = "Ingrese un digito del 0 a el 9 o una letra k";
  }
}
})
});


const iva = 19/100;
let valor_iva = 0;
var total = document.getElementById("total");
let valor_interior_exterior = document.getElementById("valor_interior_exterior");

valor_interior_exterior.addEventListener("click",function(){
valor_iva = parseInt(valor_interior_exterior.value)*iva;

if(total.value !=  "" && valor_interior_exterior.checked){
  total.value = parseInt(total.value) + parseInt(valor_interior_exterior.value)+valor_iva;
}else if(total.value !=  "" && !valor_interior_exterior.checked){
  total.value = parseInt(total.value) - parseInt(valor_interior_exterior.value) - valor_iva;
}else{
  total.value = parseInt(valor_interior_exterior.value) + valor_iva;
}

});

let valor_motor = document.getElementById("valor_motor");

valor_motor.addEventListener("click",function(){
valor_iva = parseInt(valor_motor.value) * iva;

if(total.value !=  "" && valor_motor.checked){
  total.value = parseInt(total.value) + parseInt(valor_motor.value) + valor_iva;
}else if(total.value !=  "" && !valor_motor.checked){
  total.value = parseInt(total.value) - parseInt(valor_motor.value) - valor_iva;
}else{
  total.value = parseInt(valor_motor.value) + valor_iva;
}

});



