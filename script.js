let textoEfecto = document.getElementById("textoPresentacion");

let maquinaEscribir = (text= "", tiempo=200, etiqueta="")=>{
    let arrayCaracteres = text.split("");
    etiqueta.innerHTML="";
    let contador = 0;
    let escribir = setInterval(function() {
        etiqueta.innerHTML += arrayCaracteres[contador];
        contador++;
        if (contador === arrayCaracteres.length){    
            clearInterval(escribir);
        }
    }, tiempo);
    }

    maquinaEscribir("Hola, soy Rafael Arteaga, desarrollador Junior, me gusta afrontar retos y resolver problemas.", 50, textoEfecto);
        