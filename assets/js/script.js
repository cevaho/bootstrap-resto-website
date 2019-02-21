(function() {
    
//s'activera dans la page index :
// au clic sur le bouton #run affiche le nom d'user dans le jumbotron
//fait disparaitre le formulaire et remonter le jumbotron grace aux class css liées aux animations css3

	var indexer =  document.getElementById("indexer");
	if (typeof(indexer) != "undefined" && indexer != null){

  	    // to get the user firstname clicking on the customize button
	    document.querySelector("#run").addEventListener("click", function() {

		var poper = document.querySelector("#popup");
		var jumbo = document.querySelector(".jumbotron");
		var firstName = document.querySelector("#namer").value;
		var firstnamer = document.querySelector("#firstnamer");

		console.log(firstName);

		firstnamer.innerHTML=firstName;
		poper.classList.add("closer");
		jumbo.classList.remove("hidden");
		jumbo.classList.add("go");
		//jumbo.className.replace(/\bhidden\b/g, "");

    	    });


	    /*document.querySelector("#namer").addEventListener("keyup", function(event) {
  			// Number 13 is the "Enter" key on the keyboard
  			if (event.keyCode === 13) {
				console.log("go enter 13");
    				// Cancel the default action, if needed
    				event.preventDefault();
    				// Trigger the button element with a click
    				document.querySelector("#run").click();
	  			}
	     });*/
		
	}
    

//s'active dans la page restaurant si le nombre de span.opener est plus grand que 0 :
//check toute les minutes la date et l'heure qu'il est, l'affiche 
//en fonction de ces dat et heure, montre si le resto est fermé ou ouvert

	var nombreResto = document.querySelectorAll(".opener").length;
	if(nombreResto>0){


		function changeOpener(){
				var dateAjd = new Date();
				var ajday = dateAjd.getDay();
				var daytranslate="";
				switch(ajday){
					case 0:daytranslate="dimanche";break;
					case 1:daytranslate="lundi";break;
					case 2:daytranslate="mardi";break;
					case 3:daytranslate="mercredi";break;
					case 4:daytranslate="jeudi";break;
					case 5:daytranslate="vendredi";break;
					case 6:daytranslate="samedi";
				}
				var heurAjd = dateAjd.getHours();
				var secAjd = dateAjd.getSeconds();
				var hachunTexter = "Nous sommes "+daytranslate+", il est "+heurAjd+"h"+secAjd+"  ";
		
				var spanMyday = document.querySelectorAll(".myday");
				var spanOpen = document.querySelectorAll(".opener"),i;

				for (i = 0; i < spanOpen.length; ++i) {

					spanMyday[i].innerHTML = hachunTexter;

					if(heurAjd<12 || heurAjd>=23 ){
									spanOpen[i].innerHTML="Le restaurant est donc fermé";
				  					spanOpen[i].style.color = "white";
									spanOpen[i].classList.add("bg-danger");
									}
					else{
						spanOpen[i].innerHTML="Le restaurant est donc ouvert";
				  		spanOpen[i].style.color = "white";
						spanOpen[i].classList.add("bg-success");
						}

				}

		}

		changeOpener();


		var restoTimer = setInterval(changeOpener, 60000);
		
	}

})();
