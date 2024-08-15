function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function validarContraseña() {
    if (document.getElementsByClassName("password1").length<6){
        showAlertError()
    }else{
        return false;
    }

}

function validarRepetirContraseña() {
    if (document.getElementsById("password1") === document.getElementsByClassName("password2")){

        return true;  
    } else{ showAlertError()

    }
     
}
