var FlickrAPI = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=0e40b4d2fb02cab5dea1989aecfb79cc&tags=bicycle&sort=interestingness-desc%2C+relevance&per_page=10&format=json&nojsoncallback=1&auth_token=72157645404028193-79c20c6a3783ed75&api_sig=6202f89bed5ab67662aba6b0ef774f74";

$.getJSON(FlickrAPI).done(function (bikeImgs) {
        $(".temp").append(bikeImgs);
    });

/*var profileTpl = $('#profile').html();
        $(".left").append(_.template(profileTpl, userData));*/