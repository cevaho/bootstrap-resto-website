(function() {
    
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

})();
