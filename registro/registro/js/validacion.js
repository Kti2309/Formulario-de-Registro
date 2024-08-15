function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const nombre= document.getElementById('nombre')
const btn =document.getElementById('regBtn')

btn.addEventListener('click', ()=>{
    if(nombre.value === 'yordan'){
        showAlertSuccess()
    }else{
        showAlertError()
    }
})

