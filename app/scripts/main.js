//key
var flickrSecret = "b3ff002dc62fcf26" //secret  

//define variable for API key
var flickrKey = "f1bfffb9390361590e7654a60cb2b6bf"; 

//my code doctored by Joe	
/*$.getJSON('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=290d74f906870cf6a4cf0a88b2189b95&tags=bike%2C+mountain&tag_mode=all&sort=interestingness-desc%2C+relevance&extras=url_z&per_page=3&format=json&nojsoncallback=1').done(function(bikeImgs) {
	//loop through each object
	
	var photos = bikeImgs.photos.photo
	console.log(photos)
	photos.forEach(function(photo) {
		console.log(photo)
	//place the image link in the html element
		$('.temp').append('<img src="'+photo.url_z+'">');
	});
 

});*/

//my code doctored by me
$.getJSON('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ef3e274943a7a5e9565dd1f165e3f763&tags=bike%2C+photography&tag_mode=all&sort=interestingness-desc%2C+relevance&extras=url_z&per_page=3&format=json&nojsoncallback=1').done(function(bikeImgs) {
	//loop through each object
	var markup = '';
	var photos = bikeImgs.photos.photo;
	_.each(photos, function(img) {
		//populate the template
		markup += '<img src="' + img.url_z + '">';
    });
    $('.photosContainer').html(markup);
});

//Getting content into the image template in photosLayer div

           

//jQuery swipe: http://swipejs.com Copyright (c) 2013 Brad Birdsall Licensed under the The MIT License (MIT).

//Slider = $('#slider').Swipe().data('Swipe');
