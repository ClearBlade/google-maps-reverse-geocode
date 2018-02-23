
# ipm package: google-maps-reverse-geocode

## Overview

Reverse geocoding of coordinates to addresses

This is an ipm package, which contains one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)

## Setup

_Add any setup instructions, such as an API Key_

## API

_Document your API here_

## Usage

_Describe assets_

### Code Services

### Code Libraries

### Portals

### Collections

### ...

## Thank you

Powered by ClearBlade Enterprise IoT Platform: [https://platform.clearblade.com](https://platform.clearblade.com)
## Functions

<dl>
<dt><a href="#ReverseGeocoding">ReverseGeocoding(key)</a></dt>
<dd><p>Reverse Geocoding object requires an API Key</p>
</dd>
<dt><a href="#Example">Example()</a></dt>
<dd><p>Given lat long coordinates, find the street address.</p>
</dd>
</dl>

<a name="ReverseGeocoding"></a>

## ReverseGeocoding(key)
Reverse Geocoding object requires an API Key

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | API Key for Google Geocoding Service, https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple |

<a name="ReverseGeocoding+execute"></a>

### reverseGeocoding.execute(lat, long, callback)
process lat long, returns array of addresses

**Kind**: instance method of [<code>ReverseGeocoding</code>](#ReverseGeocoding)  

| Param | Type | Description |
| --- | --- | --- |
| lat | <code>number</code> | Latitude of point of interest, ex. 30.2672 |
| long | <code>number</code> | Longitude of point of interest, ex -97.7431 |
| callback | <code>callback</code> | callback with function signature: (err, data) |

**Example**  
```js
response
{
  "address_components": [
    {
      "long_name": "501",
      "short_name": "501",
      "types": [
        "street_number"
      ]
    },
    {
      "long_name": "Congress Avenue",
      "short_name": "Congress Ave",
      "types": [
        "route"
      ]
    },
    {
      "long_name": "Downtown",
      "short_name": "Downtown",
      "types": [
        "neighborhood",
        "political"
      ]
    },
    {
      "long_name": "Austin",
      "short_name": "Austin",
      "types": [
        "locality",
        "political"
      ]
    },
    {
      "long_name": "Travis County",
      "short_name": "Travis County",
      "types": [
        "administrative_area_level_2",
        "political"
      ]
    },
    {
      "long_name": "Texas",
      "short_name": "TX",
      "types": [
        "administrative_area_level_1",
        "political"
      ]
    },
    {
      "long_name": "United States",
      "short_name": "US",
      "types": [
        "country",
        "political"
      ]
    },
    {
      "long_name": "78701",
      "short_name": "78701",
      "types": [
        "postal_code"
      ]
    }
  ],
  "formatted_address": "501 Congress Ave, Austin, TX 78701, USA",
  "geometry": {
    "bounds": {
      "northeast": {
        "lat": 30.268066,
        "lng": -97.742813
      },
      "southwest": {
        "lat": 30.2671174,
        "lng": -97.74313049999999
      }
    },
    "location": {
      "lat": 30.2671158,
      "lng": -97.7427629
    },
    "location_type": "RANGE_INTERPOLATED",
    "viewport": {
      "northeast": {
        "lat": 30.2689406802915,
        "lng": -97.7416227697085
      },
      "southwest": {
        "lat": 30.2662427197085,
        "lng": -97.7443207302915
      }
    }
  },
  "place_id": "Eic1MDEgQ29uZ3Jlc3MgQXZlLCBBdXN0aW4sIFRYIDc4NzAxLCBVU0E",
  "types": [
    "street_address"
  ]
}
```
<a name="Example"></a>

## Example()
Given lat long coordinates, find the street address.

**Kind**: global function  
