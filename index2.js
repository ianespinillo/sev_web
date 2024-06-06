let contadorPreguntas = localStorage.getItem('contadorPreguntas') || 0;
let preguntasCorrectas= localStorage.getItem('preguntasCorrectas')||0; 

if(contadorPreguntas === 0){
    // swal.fire({
    // title:'Que empiece el juego',
    // icon:'info',
    // })

    alert('hola')
} 

let fetched= []
        fetch ('./base-preguntas.json')
        .then(res => res.json())
            .then(res => {
                fetched= [...res]
                initializeGame(fetched)
            })
        .catch((e)=> console.error(e))

    function arrSorter ( array = fetched) {
        const arr2 = [...array];
        const arrRetorned = [];
        array.forEach(() => {
            const i = Math.floor(Math.random() * arr2.length);
            arrRetorned.push(...arr2.splice(i,1))
        });
        return arrRetorned;
    }

    function optionSorter (options){
        const arrCopy = [...options];
        const optionsReturn = [];
        options.forEach( () =>{
            const i = Math.floor(Math.random() * arrCopy.length);
            optionsReturn.push(...arrCopy.splice(i,1))
        })
        return optionsReturn;
    }
    function initializeGame (answers ) {
        
        const arrAnswers = arrSorter(answers) ;
        const answSelected = arrAnswers[0];
        const { incorrecta1, incorrecta2, incorrecta3, respuesta, imagen, pregunta } = answSelected
        const optionDesorted = [incorrecta1, incorrecta2, incorrecta3, respuesta]
        const options = optionSorter(optionDesorted)
        const img = document.querySelector('.imagen');
        img.src = imagen;
        const puntaje = document.querySelector('.puntaje');
        puntaje.textContent= `${preguntasCorrectas} / ${contadorPreguntas}`
        const preguntaDiv = document.querySelector('.pregunta');
        preguntaDiv.textContent= `${pregunta}`
        
        setOptions(options, respuesta);

    }

    function setOptions(options,rta) {
        setTimeout(() => {
            contadorPreguntas++
            localStorage.setItem('contadorPreguntas', contadorPreguntas)
                if(contadorPreguntas >= 5){
                    finalScreen();
                }else{
                    window.location.reload();
                }
            }, 8000);

        const btns = document.querySelectorAll('.btn');
        btns.forEach(btn =>{
            const i = Math.floor(Math.random()*options.length);
            btn.textContent = options[i]
            options.splice(i, 1)
            
            btn.addEventListener('click', e =>{
                if(btn.textContent === rta){
                    btn.classList.add("correcto");
                }else{
                    btn.classList.add("incorrecto");
                }
                setTimeout(()=>{
                    verifyAnswer(e, rta);
                }, 800)
            })
        })
    }

    function verifyAnswer(e, respuesta) {
        if(e.target.textContent === respuesta || undefined){
            preguntasCorrectas++;
        }
        contadorPreguntas++;
        localStorage.setItem('contadorPreguntas', contadorPreguntas)
        localStorage.setItem('preguntasCorrectas', preguntasCorrectas)
        if(contadorPreguntas >= 5){
            finalScreen();
        }else{
            window.location.reload();
        }
    }

    function finalScreen(){
        swal.fire({
            title: 'JuegoFinalizado',
            text:
                (preguntasCorrectas <= 2)? 'No has alcanzado el minimo requerido, continua practicando ' : 'Felicidades!! Has superado las pruebas, hora de la parte práctica',
            icon:(preguntasCorrectas <= 2)? 'error' : 'success',  
        })
        localStorage.removeItem('contadorPreguntas');
        localStorage.removeItem('preguntasCorrectas');

        const recargar = document.querySelector('.swal2-confirm')
        recargar.addEventListener('click', ()=>{
            window.location.reload();
        })
    }
    
    
// ian es gay