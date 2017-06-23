import {Model} from 'backbone';

const APPID = "b119ec77feba75fa37a4e01727979eea";
const UNITS_FORMAT = "metric";

/**
 * Model for every match in the collection
 *
 * @constructor
 */
const CurrentWeather = Model.extend({
    url: "http://api.openweathermap.org/data/2.5/weather?units=" + UNITS_FORMAT + "&APPID=" + APPID
});

export default CurrentWeather;
