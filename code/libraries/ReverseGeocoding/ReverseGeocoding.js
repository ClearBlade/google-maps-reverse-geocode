/**
 * Reverse Geocoding object requires an API Key
 * @typedef {Object} ReverseGeocoding
 * @param {string} key - API Key for Google Geocoding Service, https://developers.google.com/maps/documentation/javascript/get-api-key
 */
function ReverseGeocoding(key){
    
    /**
     * This method processes lat, long and returns array of addresses. Detailed information can be found at 
     * https://developers.google.com/maps/documentation/javascript/RevGeoExamples/geocoding-reverse
     * @typedef {Object} execute
     * @memberof ReverseGeocoding
     * @param {number} lat - Latitude of point of interest, ex. 30.2672
     * @param {number} long - Longitude of point of interest, ex -97.7431
     * @param {callback} callback - signature `function(err, data){}`
     * @returns {Object} response, as specified in Google Maps api, example response shown
     * 
     * @example
     * var rg = ReverseGeocoding(key);
     * rg.execute(lat, long, function(err, data){
     *      if(err){
     *          resp.error(data);
     *      }
     *      resp.success(data.formatted_address);
     * });
     * 
     * // Example response
     *  {
     *   "address_components": [
     *     {
     *       "long_name": "501",
     *       "short_name": "501",
     *       "types": [
     *         "street_number"
     *       ]
     *     },
     *     {
     *       "long_name": "Congress Avenue",
     *       "short_name": "Congress Ave",
     *       "types": [
     *         "route"
     *       ]
     *     },
     *     {
     *       "long_name": "Downtown",
     *       "short_name": "Downtown",
     *       "types": [
     *         "neighborhood",
     *         "political"
     *       ]
     *     },
     *     {
     *       "long_name": "Austin",
     *       "short_name": "Austin",
     *       "types": [
     *         "locality",
     *         "political"
     *       ]
     *     },
     *     {
     *       "long_name": "Travis County",
     *       "short_name": "Travis County",
     *       "types": [
     *         "administrative_area_level_2",
     *         "political"
     *       ]
     *     },
     *     {
     *       "long_name": "Texas",
     *       "short_name": "TX",
     *       "types": [
     *         "administrative_area_level_1",
     *         "political"
     *       ]
     *     },
     *     {
     *       "long_name": "United States",
     *       "short_name": "US",
     *       "types": [
     *         "country",
     *         "political"
     *       ]
     *     },
     *     {
     *       "long_name": "78701",
     *       "short_name": "78701",
     *       "types": [
     *         "postal_code"
     *       ]
     *     }
     *   ],
     *   "formatted_address": "501 Congress Ave, Austin, TX 78701, USA",
     *   "geometry": {
     *     "bounds": {
     *       "northeast": {
     *         "lat": 30.268066,
     *         "lng": -97.742813
     *       },
     *       "southwest": {
     *         "lat": 30.2671174,
     *         "lng": -97.74313049999999
     *       }
     *     },
     *     "location": {
     *       "lat": 30.2671158,
     *       "lng": -97.7427629
     *     },
     *     "location_type": "RANGE_INTERPOLATED",
     *     "viewport": {
     *       "northeast": {
     *         "lat": 30.2689406802915,
     *         "lng": -97.7416227697085
     *       },
     *       "southwest": {
     *         "lat": 30.2662427197085,
     *         "lng": -97.7443207302915
     *       }
     *     }
     *   },
     *   "place_id": "Eic1MDEgQ29uZ3Jlc3MgQXZlLCBBdXN0aW4sIFRYIDc4NzAxLCBVU0E",
     *   "types": [
     *     "street_address"
     *   ]
     * }  
     * 
     */
    function execute(lat, long, callback){
        
        if(key === ""){
            callback(true, "Must provide API Key before making requests to Google Geocoding Service.")
        }
        
        var requestObject = Requests();
        var options = {
            uri: "https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+long+"&key="+key,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        };
        requestObject.get(options, function(err, data){
            try{
                var output = JSON.parse(data);
                var results = output.results;
                if( ! err && results.length > 0) {
                    callback(false, results[0]);
                } else {
                    callback(true, "Response contained malformed JSON");
                }
            }
            catch(e){
                callback(true, "Unable to make GET request")
            }
        });
    };
    
    return {
        execute
    }

}

/**
 * This callback is displayed as part of ReverseGeocoding.
 * @callback callback
 * @param {Object} err
 * @param {Object} resp
 */

