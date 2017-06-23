import {Collection} from 'backbone';
import DailyForecast from '../models/DailyForecast';

/**
 * Collection for the matches endpoint
 *
 * @constructor
 */
const API_KEY = "b119ec77feba75fa37a4e01727979eea";
const UNITS_FORMAT = "metric";

const DailyForecasts = Collection.extend({
    model: DailyForecast,
    parse: function (response) {
        return response.list;
    },
    url: "http://api.openweathermap.org/data/2.5/forecast?units=" + UNITS_FORMAT + "&APPID=" + API_KEY
});

export default DailyForecasts;
