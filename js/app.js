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

