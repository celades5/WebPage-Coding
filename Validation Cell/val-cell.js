function validateName(field){
//input field text content
var name = field.value;

var output = document.querySelector('#nameTyped');
output.innerHTML= "Valida name:" + name;

if(name.length < 3){
    output.innerHTML = "invalid name! It is too short. Put at least 4 characetrs";
}
}