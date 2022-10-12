function cantClicks(){
    // Si existe contador se incrementa y sino se inicializa
    if (sessionStorage.cont) {
     // Se convierte el contador a entero porque por defecto es una cadena
     sessionStorage.cont = parseInt(sessionStorage.cont) + 1;
    }
    else {
     sessionStorage.cont = 1;
    }
    document.getElementById("cont").value = sessionStorage.cont + " Clicks";
   }
   
   function rstClicks(){
    sessionStorage.removeItem("cont");

    location.reload();
   }