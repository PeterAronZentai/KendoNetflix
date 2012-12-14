// JavaScript Document

// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
function onDeviceReady() {
    
}

var movieTitleData;

movieTitleData = new kendo.data.DataSource(
	{
	type: "odata",
	pageSize: 30,
	endlessScroll: true,
	batch: false,
	transport: {
			read: {
			url: "http://odata.netflix.com/Catalog/Titles",
			dataType: "jsonp",

			data: {
					Accept: "application/json"
				}
		}
		}

});
function showMovieTitle(e) {
	movieTitleData.fetch();
}

var movieTitleData;

movieTitleData = new kendo.data.DataSource(
	{
	type: "odata",
	pageSize: 30,
	endlessScroll: true,
	batch:false,
	transport:{
			read: {
			url: "http://odata.netflix.com/Catalog/Titles",
			dataType: "jsonp",

			data: {
					Accept: "application/json"
				}
		}
		}

});
