window.addEventListener('load', function(){
    let formulario = document.querySelector('form');
    let btnSubmit = document.querySelector('#btnSubmit');
    let inputEmail = document.querySelector('#inputEmail');
    let inputPassword = document.querySelector('#inputPassword');
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
        if(inputEmail.value.lenght<1 || !validateEmail()){
            errores.email = "Ingrese un email válido"
        }
        if(inputPassword.value.length<8){
            errores.password = "La contraseña debe tener al menos 8 caracteres"
        }
        if(Object.keys(errores).length>=1){
            erEmail.innerText = (errores.email) ? errores.email : '';
            erPassword.innerText = (errores.password) ? errores.password : '';
        } else {
            formulario.submit();
        }
    })
    
})