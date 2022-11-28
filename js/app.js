var lista = new Array('images/PC_01.webp','images/PC_02.webp', 'images/PC_03.webp');
var contador = 0;
var tempor = null;
function cambio(sen) {
    contador+= sen;
    if (contador == lista.length) 
        contador = 0;
    else  if (contador < 0) 
        contador = lista.length-1;
    document.images.centro.src = lista[contador]
    window.status="Imagen número "+contador
}


window.addEventListener('load', function(){

    // Para cambiar las penstañas de producto
    let enlaces_pestanas = document.querySelectorAll('#pestanas-producto a');

    for( let enlace of enlaces_pestanas ) {

            enlace.addEventListener('click', function (){

            let pestana_activa = enlace.getAttribute('data-pestana');
            let pestanas = document.querySelectorAll('#pestanas>*');

            for( let pestana of pestanas ) {

                //quitamos la visibilidad de todas las pestañas
                pestana.classList.remove('pestanas-mostrar');

            }

            //mostramos la activa
            document.querySelector('#' + pestana_activa).classList.add('pestanas-mostrar');
            
        });
    }

});

// A PARTIR DE AQUÍ CONTROLAMOS TABLA Y FORMULARIO

$('#addProducto').click(function () {
    var id = $('#id').val(); 
    var nombre = $('#nombre').val();
    var referencia = $('#referencia').val();
    var categoria = $('#categoria').val();
    var precio = $('#precio').val();
    var cantidad = $('#cantidad').val();
    $('table tbody').append(`
        <tr>
            <td id="id">${id}</td>
            <td id="nombre">${nombre}</td>
            <td id="referencia">${referencia}</td>
            <td id="categoria">${categoria}</td>
            <td id="precio">${precio}</td>
            <td id="cantidad">${cantidad}</td>
            <td><button onclick="dobleClick()">Editar</button></td>
            <td><button class="btn btn-primary btnborrar">Borrar</button></td>
        </tr>`
    );
  
    document.addEventListener('DOMContentLoaded', function(){
    let formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', function() {
    formulario.reset();
  });
  
  
  });
  });
  
  // Delegar evento buscando botones por clase
  $(document).on('click', '.btnborrar', function() {
    $(event.target).closest('tr').remove();
  });
  
  
  // creamos un evento doble click para cada una de las celdas de la tabla
  
  function dobleClick() {
    const tds=document.querySelectorAll("td");
    
    for(td of tds) {
        td.addEventListener("dblclick",function() {
            // creamos un nuevo input con el valor actual de la celda
            let input=document.createElement('input');
            input.value=this.textContent;
    
            // evento que se ejecuta cuando el input pierde el foco
            input.addEventListener("blur",function() {
                removeInput(this);
            });
    
            // evento que se ejecuta cada vez que se deja de pulsar una tecla
            input.addEventListener("keydown",function(e) {
    
                // la tecla 13, es el Enter
                if(e.which==13) {
                    removeInput(this);
                }
            });
    
            // quitamos el contenido de la celda de la tabla
            this.textContent="";
    
            // Ponemos en la celda el input que hemos creado
            this.appendChild(input);
        });
    }
    
    // Eliminamos el input y ponemos el valor del mismo
    function removeInput(e) {
        e.parentElement.textContent=e.value;
    }
  }

  function mostrarFormulario() {
    document.getElementById("formulario").style.visibility = "visible";
    document.getElementById("tabla_productos").style.marginTop = "5%";
    document.getElementById("add").style.visibility = "hidden";
  }