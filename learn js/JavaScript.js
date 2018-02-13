var country = 
{
	name : "Ukraine",
	age : 26,
	cities : [
		{ name : "Kyev", age : 100},
		{name: "Khmelnytsky", age : 100},
		{name : "Charkov", age : 500},
		{ name : "Kyev1", age : 200},
		{name: "Khmelnytsky1", age : 300},
		{name : "Charkov1", age : 50}

	]
}


document.write("<h3> Столиця: </h3>");


var age = 0;

 for (var i = 0; i < country.cities.length; i++) 
 {
 		if(age < country.cities[i].age)
 		{
 			age = country.cities[i].age;
 		}
 }


for (var i = 0; i < country.cities.length; i++) 
 {
 		if (age == country.cities[i].age) 
 		{
 			function capital()
 			{
 				alert("Столиця: "+ country.cities[i].name+ " Вік: " + country.cities[i].age);
 			}
 			capital(); 
 		}
 }

