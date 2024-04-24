// Dia de la semana
const weekday = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado"];

const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("weekday").innerHTML = day;



// Form 

  function Alert() {
    var Name = document.getElementById("name").value;
    var Lastname = document.getElementById("lastname").value;
    var Telefono = document.getElementById("phone").value;
    var Correo = document.getElementById("mail").value;
    var Mensaje = document.getElementById("Message").value;

    alert(`
    Nombre: ${Name} 
    Apellido: ${Lastname} 
    Telefono: ${Telefono} 
    Correo: ${Correo} 
    Mesaje: ${Mensaje}`)
  }


