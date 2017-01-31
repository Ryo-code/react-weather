const rootURL = 'http://api.openweathermap.org/data/2.5/weather';
const APPID = "be44b10cea2a6688c15d84f0523cc7ba"
//This probably won't work with the iOS simulator now...
//but if you put it on an actual iPhone and tested it, it would probably work.

const kelvinToC = (kelvin) => {
  return Math.round(kelvin- 273.15) + " ˚C"
}

export default (latitude, longitude) => {
  const url = `${rootURL}?lat=${latitude}&lon=${longitude}&APPID=${APPID}`;
  console.log(url);

  return fetch(url) //fetch returns a promise
    .then((response) => { //the response is not immediately usable so we need to call json() below
      console.log('test', response)
      return response.json() //json() returns another promise, so we need another .then
    })
    .catch((e) => console.log('Error with request', e))
    .then((json) => { //this .then will retrieve the json you actually care about
      console.log('stuff', json);
      return {
        city: json.name,
        temperature: kelvinToC(json.main.temp),
        description: json.weather[0].description
      }
    });
}
