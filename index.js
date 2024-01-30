var elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function (){
        duvida.classList.toggle('ativa')
    })
})



// funçao e algum valor definido pelo usuario do sistema para executar algo algum evento 
// function nome(argumento){

// }