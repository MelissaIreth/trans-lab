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

	/*LLAMADA DE LA API*/
		var versaldo = $(".trjt").val()
		$.ajax({
			url: 'https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + versaldo,
			type: 'GET',
			dataType: 'json',
		})
		.done(function(e) {
			console.log("success");
			$(".showsaldo").append('<h4 class="text-center sld">SALDO TOTAL</h4><h3 class="text-center numerosld">'+e.saldoTarjeta+'</h3>')

		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
});
	

	$(".select1").click(function(t) {
		$(".input4").css("visibility", "hidden")
});


/*HTML 6 calcular saldo*/
 $(".btncalcular").click(function(event) {
 	$(".versaldo").toggle()
 	var select = $(".select6").val();
 	var selecttarjeta = $(".input4").val()
 	
 		/*LLAMADA DE LA API HTML6*/
		var calcularsaldo = $(".trjt6").val()
		$.ajax({
			url: 'https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + calcularsaldo,
			type: 'GET',
			dataType: 'json',
		})
		.done(function(e) {
			console.log("success");
			var resta = e.saldoTarjeta - select; /*TENGO QUE SACAR EL $ y . AL SALDO*/
			 	$(".ncosto").append('<h3>$'+select+'</h3>')
 				$(".nsaldo").append('<h3>$'+resta+'<h3>')

		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});

 });
  

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
			$(".invalid-email").text("Porfavor ingresa un correo valido");
				
		}
		else if(pass.length != 8 || pass_test.test(pass)==false)
		{
			$(".invalid-pass").text("Debe contener 8 caracteres");
		}
		else
		{
			window.location.href ="index2.html"
		}
	});

		var correo = localStorage.getItem("email")
		$("#mail span").text(correo)

/*HTML 3 guardar datos tarjeta (8 numeros)*/
	$(".addtarjeta").click(function(){
		var numerot = $(".trjt").val();

		localStorage.tarjeta = $(".trjt").val();

		if(numerot.length != 8){
			$(".invalid-tarj").text('INGRESE UN NUMERO VALIDO');
		}else{
			$(".datotarjeta p").text(numerot);
			$(".tarjetainvalida").hide();
			$(".inputarjeta").val("");
		}

		var alltarjetas = [];
			alltarjetas.push(numerot);
            console.log(alltarjetas);
            localStorage.setItem("numerot", JSON.stringify(alltarjetas));
	});	
	
});