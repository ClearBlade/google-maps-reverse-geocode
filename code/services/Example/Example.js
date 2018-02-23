/**
 * Given lat long coordinates, find the street address.
 */
function Example(req, resp){
    
    // TODO Enter API Key, can be acquired here:
    // https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple
    API_KEY = ""
    var lat = 30.2672;
    var long = -97.7431;
    var reverseGeo = new ReverseGeocoding(API_KEY);
    reverseGeo.execute(lat, long, function(err, data){
        if(err){
            resp.error(data);
        }
        resp.success(data.formatted_address);
    });
}