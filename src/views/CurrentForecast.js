import {View} from 'backbone';
import _ from 'underscore';
import City from "../models/City";

/**
 * Object representing the CurrentForecast element
 *
 * @constructor
 */
const CurrentForecast = View.extend({
    templateWeather: '',
    templateError: '',

    initialize: function ()
    {
        //Set templates to use later on
        this.templateWeather = _.template(this.$('#template-now').html());
        this.templateError = _.template(this.$('#template-error').html());

        //Listen to global events for change of new city
        App.events.on('newCity', this.loadCurrentForecast, this);
    },

    /**
     * Wrapper function to load the current forecast
     *
     * @param data
     */
    loadCurrentForecast: function (data)
    {
        this.model.fetch({
            success: (model) => this.loadCurrentForecastSuccessHandler(model),
            error: (model, response) => this.loadCurrentForecastErrorHandler(model, response),
            data: {
                q: data.city
            }
        });
    },

    /**
     * Success Handler will add HTML of current weather to this $el and trigger the five day forecast
     *
     * @param model
     */
    loadCurrentForecastSuccessHandler: function (model)
    {
        let attr = model.attributes;
        this.$el.html(this.templateWeather({forecast: attr}));

        // Trigger event for FiveDayForecast
        let city = new City({lat: attr.coord.lat, lon: attr.coord.lon, id: attr.id});
        App.events.trigger('fiveDay', {
            city: city
        });
    },

    /**
     * On error, show error message in this $el
     *
     * @param model
     * @param response
     */
    loadCurrentForecastErrorHandler: function (model, response)
    {
        this.$el.html(this.templateError({message: response.responseJSON.message}));
    }
});

export default CurrentForecast;
