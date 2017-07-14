/*FUNCION DEL SIDEMENU*/
function openSidemenu() {
    document.getElementById("myMenu").style.width = "70%";
}

function closeSidemenu() {
    document.getElementById("myMenu").style.width = "0";
}

/*HTML4 preguntas frecuentes*/
$(".btnask").click(function(event){
	$(".pregunta").toggle()
});

/*HTML 5 ver saldo*/
$(".btnsaldo").click(function(e){
	$(".showsaldo").toggle()
})

	$(".showsaldo").append('<h4 class="text-center sld">SALDO TOTAL</h4><h3 class="text-center numerosld">$</h3>')

/*HTML 6 calcular saldo

	$(".costo").append('<h4 class="text-center sld">COSTO PASAJE</h4><h3 class="text-center numerossaldo">$</h3>')
	$(".saldo").append('<h4 class="text-center sld">SALDO PASAJE</h4><h3 class="text-center numerossaldo">$</h3>')
*/

/*HTML 1 validacion*/
$(document).ready(function() {
	
	$("#submit").click(function validar(email,pass){
		var email = $("#email").val();
		var pass = $("#password").val();
		 
		var email_test = /^([a-zA-Z0-8_.+-])+\@(([a-zA-Z0-8-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var pass_test = /([0-8])/;
		 
		if(!email_test.test(email))
		{
			$(".invalid-email").append("Porfavor ingresa un correo valido");	
		}
		else if(pass.length<7 || pass_test.test(pass)==false)
		{
			$(".invalid-pass").append("Debe contener 8 caracteres");
		}
		else
		{
			window.location.href ="index2.html"
		}
	});

});