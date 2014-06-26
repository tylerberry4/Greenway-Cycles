//key
var flickrSecret = "b3ff002dc62fcf26" //secret  

//define variable for API key
var flickrKey = "f1bfffb9390361590e7654a60cb2b6bf"; 
//AJAX request
	
$.getJSON('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=290d74f906870cf6a4cf0a88b2189b95&tags=bike%2C+mountain&tag_mode=all&sort=interestingness-desc%2C+relevance&extras=url_z&per_page=3&format=json&nojsoncallback=1').done(function(bikeImgs) {
	//loop through each object
	
	var photos = bikeImgs.photos.photo
	console.log(photos)
	photos.forEach(function(photo) {
		console.log(photo)
	//place the image link in the html element
		$('.temp').append('<img src="'+photo.url_z+'">');
	});


});

 
// var cool = $.getJSON('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=706c286c3b70b58e49389baa11374cda&tags=bicycle&sort=interestingness-desc%2C+relevance&extras=url_z&per_page=10&format=json&nojsoncallback=1')

// console.log(cool)



//     $.getJSON("http://api.flickr.com/services/feeds/groups_pool .gne?id=675729@N22&lang=en-us&format=json&jsoncallback=?", function(data){
//     $.each(data.items, function(i,item){
//     $("<img/>").attr("src", item.media.m).appendTo("#images")
//     .wrap("<a href='" + item.link + "'></a>");
//     });
//     });



// $.each([data.photoset.photo], function(i,img){

//     //build the url of the photo in order to link to it
    

//     //turn the photo id into a variable
//     var imgID = img.id;