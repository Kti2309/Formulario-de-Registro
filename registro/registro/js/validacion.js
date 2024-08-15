function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const name1= document.getElementById('nombre')
const btn =document.getElementById('regBtn')
const lastName=document.getElementById("apellido")
const mail= document.getElementById("email")
const password1=document.getElementById("password1")
const password2=document.getElementById("password2")
const checkbox=document.getElementById("terminos")

function ValidateAllBoxes(){
    if (name1.value === "" || lastName.value === "" || mail.value === "" || password1.value === "" || password2.value === "" || !checkbox.checked ) {
        showAlertError()
    }else{
        return true;
    }
}

function validatePassword() {
    if (password1.value.length<6){
        showAlertError()
    }else{
        return true;
    }
}

function validateCheckPassword() {
    if (password1.value === password2.value){

        return true;  
    } else{ showAlertError()

    }

}

function validatePasswords(){
    if(validatePassword() && validateCheckPassword()){
        return true;
    }else{
        showAlertError()
    }
}
function validateAll(){
    if (ValidateAllBoxes() && validatePassword() ){
        showAlertSuccess()
    }else{
        showAlertError()
    }
}