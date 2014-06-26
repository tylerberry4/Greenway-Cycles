//key
var flickrSecret = "b3ff002dc62fcf26" //secret  

	//define variable for API key
	var flickrKey = "f1bfffb9390361590e7654a60cb2b6bf"; 
	//AJAX request
	
	$.getJSON('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=706c286c3b70b58e49389baa11374cda&tags=bicycle&sort=interestingness-desc%2C+relevance&extras=url_z&per_page=10&format=json&nojsoncallback=1').done 
		(function(bikeImgs) {
		//loop through each object
		$.each(bikeImgs.photos.photo, function(i, img) {
			console.log(img.url_z);
		//place the image link in the html element
		$('.temp').html('<img src="'+img.url.z+'">');
    });
		});

 




