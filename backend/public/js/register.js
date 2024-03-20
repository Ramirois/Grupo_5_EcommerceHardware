
window.addEventListener('load', function(){
    let formulario = document.querySelector('form');
    let btnSubmit = document.querySelector('#btnSubmit');
    let inputNombre = document.querySelector('#inputNombre');
    let inputApellido = document.querySelector('#inputApellido');
    let inputEmail = document.querySelector('#inputEmail');
    let inputPassword = document.querySelector('#inputPassword');
    let erName = document.querySelector('.erName');
    let erLastName = document.querySelector('.erLastName');
    let erEmail = document.querySelector('.erEmail');
    let erPassword = document.querySelector('.erPassword');
    

    //función obtenida de https://www.coderbox.net/blog/validar-email-usando-javascript-y-expresiones-regulares/
    function validateEmail(){
        var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
        // Using test we can check if the text match the pattern
        if( validEmail.test(inputEmail.value) ){
            return true;
        }else{
            return false;
        }
    } 
    
    btnSubmit.addEventListener('click', function(e){
        e.preventDefault();
        let errores = {};
        if(inputNombre.value.length<2){
            errores.name = "El nombre debe tener al menos 2 caracteres"
        }
        if(inputApellido.value.length<2){
            errores.lastName = "El apellido debe tener al menos 2 caracteres"
        }
        if(inputEmail.value.lenght<1 || !validateEmail()){
            errores.email = "Ingrese un email válido"
        }
        if(inputPassword.value.length<8){
            errores.password = "La contraseña debe tener al menos 8 caracteres"
        }
        if(Object.keys(errores).length>=1){
            erName.innerText = (errores.name) ? errores.name : '';
            erLastName.innerText = (errores.lastName) ? errores.lastName : '';
            erEmail.innerText = (errores.email) ? errores.email : '';
            erPassword.innerText = (errores.password) ? errores.password : '';
        } else {
            formulario.submit();
        }
    })
    
})