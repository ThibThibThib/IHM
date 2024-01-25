//Voici quelques fonction en js 

var age2023 = function(){
    var nomjs = document.getElementById("nom").value;
    var yearInput = document.getElementById("naiss");
    var year = parseInt(yearInput.value);
	var longueur = nomjs.length;

	document.getElementById("zoneAge").innerHTML = ""
	document.getElementById("zoneAge2").innerHTML =""
	document.getElementById("inconnunom").innerHTML = ""

    if (longueur === 0) {
        nomjs = "<div class='RED'><B>NOM INCONNUE</B></div>";
		document.getElementById("inconnunom").innerHTML = "<I>Vous n'avez saisie aucun nom</I>";

    }

	if (1900 <= year && year <= 2024) {
		var age = 2024 - year;
		document.getElementById("zoneAge").innerHTML = nomjs + ", Vous aurez " + age + " ans en <B>2024</B>.";
	} 
	else 
		if (year < 1900) {
			year = 1900;
			yearInput.value = year;
			document.getElementById("zoneAge").innerHTML = "<div class='RED'><B>AGE INCORRECT</B></div> <I>Vous avez saisi un nombre inférieur à <B>1900</B></I>.";
			document.getElementById("zoneAge2").innerHTML ="<I>Veuillez saisir une année comprise entre <B>1900</B> et <B>2024</B></I>";

		} 
		else 
			if (year > 2024) {
				year = 2024;
				yearInput.value = year;
				document.getElementById("zoneAge").innerHTML ="<div class='RED'><B>AGE INCORRECT</B></div> <I>Vous avez saisi un nombre supérieur à <B>2024<B/></I>.";
				document.getElementById("zoneAge2").innerHTML ="</I>Veuillez saisir une année comprise entre <B>1900</B> et <B>2024</B></I>";

	}
}


var sousProg = function(){
		alert("Le sous programme s'est exécuté");
		document.getElementById("monTexte").innerHTML="<p>Voici le résultat du clic sur ce bouton. <br> Une fenêtre s'est ouverte, ce texte s'est affiché et le CSS a été modifié. <br> Créer un nouveau bouton qui afficher BRAVO lorsque l'on cliquera dessus</p>"
		
		// on récupère l'élément
		var elmt = document.getElementById("zoneAge");

		// on modifie son style
		elmt.style.backgroundColor = "#ffff00";
		elmt.style.color = "#00ff00";
		elmt.style.fontSize = "2em";
		elmt.style.textAlign = "left";
	}
