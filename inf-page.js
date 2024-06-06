let selectedOP = document.querySelector('#seguridad');
const title =  document.querySelector('#title-h1');
const pDescription = document.querySelector('#descritionText');
const imgPort = document.querySelector('#imgPort');

const options = document.querySelectorAll('a[data-type="navOption"]');
options.forEach(option =>{
    option.onclick = () => recievedOption(option.attributes[2].textContent)
})

function recievedOption(option){
    switch (option){
        case 'op1': 
        imgPort.classList.remove('mujerLeyendo');
            title.textContent = 'Seguridad vial'
            pDescription.textContent='Medidas y prácticas implementadas para prevenir accidentes de tráfico, reducir lesiones y salvaguardar la vida de los usuarios de las vías públicas. Su enfoque se extiende a conductores, peatones, ciclistas y pasajeros, y busca crear un entorno vial más seguro para todos.'
            imgPort.src='/img/Imgs-decoration/Semaforo 3D.png'
            break;
        case 'op2':
            title.textContent='Educación'
            pDescription.textContent='Conjunto de conocimientos, habilidades y actitudes que se enseñan a las personas para que puedan moverse de manera segura y responsable en el entorno vial. Su objetivo principal es prevenir accidentes de tráfico, reducir lesiones y salvar vidas.'
            imgPort.src = './img/Imgs-decoration/mujer-leyendo.png';
            imgPort.classList.add('mujerLeyendo');
            break;
        case 'op3':
            imgPort.classList.remove('mujerLeyendo');
            title.textContent = 'Conscientización';
            pDescription.textContent = 'Una sociedad consciente entiende la responsabilidad compartida en la prevención de accidentes y promueve prácticas seguras entre todos los usuarios viales. ';
            imgPort.src = './img/Imgs-decoration/atencion.png'
            break;
    }
}
