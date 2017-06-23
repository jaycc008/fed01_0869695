import _ from 'underscore';
import {Events} from 'backbone';
import Search from './views/Search';
import CurrentForecast from './views/CurrentForecast';
import FiveDayForecast from './views/FiveDayForecast';
import CurrentWeather from './models/CurrentWeather';
import DailyForecasts from "./collections/DailyForecasts";

(function ()
{
    let setGlobalVariables = function ()
    {
        window.App = {};
        App.events = _.clone(Events);
    };

    let init = function ()
    {
        setGlobalVariables();


        let dailyForecastsCollection = new DailyForecasts();
        let forecastModel = new CurrentWeather();
        new Search({el: "#search"});
        new CurrentForecast({el: "#forecast", model: forecastModel});
        new FiveDayForecast({el: "#forecast-five-day", collection: dailyForecastsCollection});

        Backbone.history.start({pushState: true, root: ''});
    };

    window.addEventListener('load', init);
})();
