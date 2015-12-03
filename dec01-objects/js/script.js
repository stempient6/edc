/* js goes here */
var turtles ={
	picasso: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Portrait_de_Picasso%2C_1908.jpg',
	dali: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Salvador_Dal%C3%AD_1939.jpg/800px-Salvador_Dal%C3%AD_1939.jpg',
	warhol: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Andy_Warhol_1975.jpg',
	leonardo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/LEONARDO.JPG',
	monet: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/800px-Claude_Monet_1899_Nadar_crop.jpg',
	michelangelo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Michelango_Portrait_by_Volterra.jpg/800px-Michelango_Portrait_by_Volterra.jpg',
	rembrandt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg/800px-Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg',
	gauguin: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Paul_Gauguin_1891.png',
	renoir: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Pierre_Auguste_Renoir%2C_uncropped_image.jpg',
	raphael: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Raffaello_Sanzio.jpg/800px-Raffaello_Sanzio.jpg',
}
var turtles = function(){
	var output = '<ul>';
	var gallery = document.getElementsByClassName('gallery');
	for(var key in arguments[0]){
		output += '<li><img  width="200px" height="auto" src="' + turtles[key] + '">'
	}
	output+= '</ul>';
	for(var i = 0; i < gallery.length; i++){
		gallery[i].innerHTML = output;
	}
}(turtles);