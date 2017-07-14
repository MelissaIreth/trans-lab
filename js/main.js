/*FUNCION DEL SIDEMENU*/
function openSidemenu() {
    document.getElementById("myMenu").style.width = "70%";
}

function closeSidemenu() {
    document.getElementById("myMenu").style.width = "0";
}

/*HTML4 preguntas frecuentes*/
$(".btnask1").click(function(event){
	$(".uno").toggle()
});
$(".btnask2").click(function(even){
	$(".dos").toggle()
});
$(".btnask3").click(function(eve){
	$(".tres").toggle()
});
$(".btnask4").click(function(ev){
	$(".cuatro").toggle()
});

/*HTML 5 ver saldo*/
$(".btnsaldo").click(function(e){
	$(".showsaldo").toggle()
});
	$(".showsaldo").append('<h4 class="text-center sld">SALDO TOTAL</h4><h3 class="text-center numerosld">$</h3>')

	$(".select1").click(function(t) {
		$(".input4").css("visibility", "hidden")
});


 /*HTML 6 calcular saldo*/
 $(".btncalcular").click(function(event) {
 	$(".versaldo").toggle()

 });
 $(".ncosto").append('$1')
 $(".nsaldo").append('$2')
  
  	
 
 /*HTML 1 validacion*/
$(document).ready(function() {
	
	$("#submit").click(function validar(email,pass){
		var email = $("#email").val();
		var pass = $("#password").val();

		localStorage.email = $("#email").val();
		 
		var email_test = /^([a-zA-Z0-8_.+-])+\@(([a-zA-Z0-8-])+\.)+([a-zA-Z0-8]{2,4})+$/;
		var pass_test = /([0-9]{8})/;
		 
		if(!email_test.test(email))
		{
			$(".invalid-email").append("Porfavor ingresa un correo valido");	
		}
		else if(pass.length != 8 || pass_test.test(pass)==false)
		{
			$(".invalid-pass").append("Debe contener 8 caracteres");
		}
		else
		{
			window.location.href ="index2.html"
		}
		
	});

/*HTML 3 guardar datos tarjeta (8 numeros)*/
	$(".addtarjeta").click(function(){
		var numerot = $(".trjt").val();

		localStorage.tarjeta = $(".trjt").val();

		if(numerot.length != 8){
			$(".tarjetainvalida").append('<span class="invalid-tarj">INGRESE UN NUMERO VALIDO</span>');
		}else{
			$(".datotarjeta").append('<p class="tarjetaguardada">'+numerot+'</p>');
			$(".tarjetainvalida").hide();
			$(".inputarjeta").val("");
		}

		var alltarjetas = [];
			alltarjetas.push(numerot);
            console.log(alltarjetas);
            localStorage.setItem("numerot", JSON.stringify(alltarjetas));
	});	
});
var saveMail = $("#mail").text(localStorage.getItem(email));
		$("#mail").append(saveMail);


/*LLAMADA DE LA API*/

$.ajax({
	url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip={id}',
	type: 'GET',
	dataType: 'json',
})
.done(function() {
	console.log("success");
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
});
