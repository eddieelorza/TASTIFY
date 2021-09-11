var dataUser = 
    {mail: 'juan@tastify.mx',pass: 'Juan2021',
    mail: 'eddie@tastify.mx',pass: 'Eddie2021'}
 

let Access1 = document.getElementById('buttonAccess');
Access1.addEventListener("click", function (date) {
    let idUser = document.getElementById('inputUserName').value;
    let Password = document.getElementById('inputPassword').value;
  if(idUser == dataUser.mail && Password == dataUser.pass){
   alert('Bienvenido')
   window.location.replace= ("https://app.bedu.org/"); 
  }else if (idUser != dataUser.mail && Password == dataUser.pass) {
    alert('Usuario incorrecto, vuelve a intentarlo')
  }else if (idUser == dataUser.mail && Password != dataUser.pass) {
    alert('Contraseña incorrecta, vuelve a intentarlo')
  }else if (Password == ''){
    alert('Campos vacio, por favor vuelve a intentar')  
  } else if (idUser == '' ){
    alert('Campos vacios, por favor vuelve a intentar')  
  }else{
    alert('Datos no registrados, por favor intenta de nuevo')
  }
})

function loadingPage(){
    window.locationf="/index1.html"
}