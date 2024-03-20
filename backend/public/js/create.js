
window.addEventListener('load', function(){
    let formulario = document.querySelector('form');
    let btnSubmit = document.querySelector('#btnSubmit');
    let inputNombre = document.querySelector('#inputNombre');
    let inputDescripcion = document.querySelector('#inputDescripcion');
    let erName = document.querySelector('.erName');
    let erDescription = document.querySelector('.erDescription');
    

    
    btnSubmit.addEventListener('click', function(e){
        e.preventDefault();
        let errores = {};
        if(inputNombre.value.length<5){
            errores.name = "El nombre debe tener al menos 5 caracteres"
        }
        if(inputDescripcion.value.length<20){
            errores.description = "La descripción debe tener al menos 20 caracteres"
        }
        if(Object.keys(errores).length>=1){
            erName.innerText = (errores.name) ? errores.name : '';
            erDescription.innerText = (errores.description) ? errores.description : '';
        } else {
            formulario.submit();
        }
    })
    
})