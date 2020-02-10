fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
  	//document.write("This is the list of users");

  	 for (var i = 0; i < myJson.length; i++) {
  	  //console.log(myJson[i].name);
  	 document.write(myJson[i].name, "<br>");
  	 //document.createElement("li");
  	 //document.createTextNode()

  	 }
     
    
  });
	





 
