// variables
const Preventivas = document.querySelector('.preventivas');
const informativas = document.querySelector('.informativas');
const reglamentarias = document.querySelector('.reglamentarias');


// eventos
document.addEventListener('DOMContentLoaded', ()=>{
    // tomamos las preguntas del JSON
    fetch ('./base-preguntas.json')
        .then(res => res.json())
            .then(res => {
                fetched= res
                completar(fetched)
            })
        .catch((e)=> console.error(e))
})

// funciones
function completar(preguntas){
        preguntas.forEach(pregunta => {

            if(pregunta.categoria == 'Seniales Reglamentarias'){

            // crea un nuevo contenedor
            const div = document.createElement('div');
            const img = document.createElement('img');
            const text = document.createElement('p');
            div.classList.add('signals');

            // le agrega la imagen y texto
            img.src=pregunta.imagen
            text.textContent= pregunta.respuesta
    
            // lo pone en el HTML
            div.appendChild(img);
            div.appendChild(text);
            reglamentarias.appendChild(div);

            }else if(pregunta.categoria == 'Seniales Preventivas'){

                // crea un nuevo contenedor
            const div = document.createElement('div');
            const img = document.createElement('img');
            const text = document.createElement('p');
            div.classList.add('signals');

            // le agrega la imagen y texto
            img.src=pregunta.imagen
            text.textContent= pregunta.respuesta
    
            // lo pone en el HTML
            div.appendChild(img);
            div.appendChild(text);
            Preventivas.appendChild(div);

            }else{

            // crea un nuevo contenedor
            const div = document.createElement('div');
            const img = document.createElement('img');
            const text = document.createElement('p');
            div.classList.add('signals');

            // le agrega la imagen y texto
            img.src=pregunta.imagen
            text.textContent= pregunta.respuesta
    
            // lo pone en el HTML
            div.appendChild(img);
            div.appendChild(text);
            informativas.appendChild(div);
            }
            
        });
}