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