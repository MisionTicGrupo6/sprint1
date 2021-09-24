function vaidar_telefono(string){
    var telefono;
	telefono = document.getElementById("campoTelefono").value;
	if(/^[0-9]\d{6,10}$/.test(telefono)){
		alert("Numero correcto")
	}else{
		alert("Numero fuera del rango permitido \n Letras o caractares especiales no permitidos")
	}
}
function validar_direccion(string){

}

module.exports.validar_telefono=validar_telefono;
module.exports.validar_direccion=validar_direccion;