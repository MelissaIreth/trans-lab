/*FUNCION DEL SIDEMENU*/
function openSidemenu() {
    document.getElementById("myMenu").style.width = "70%";
}

function closeSidemenu() {
    document.getElementById("myMenu").style.width = "0";
}

/*HTML4 preguntas frecuentes*/
$(".btnask").click(function(event) {
	$(".pregunta").toggle()
});

