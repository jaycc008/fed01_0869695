import {View} from 'backbone';
import _ from 'underscore';

/**
 * Object representing the FiveDayForecast element
 *
 * @constructor
 */
const FiveDayForecast = View.extend({
    templateWeather: '',
    templateError: '',

    initialize: function ()
    {
        //Set templates to use later on
        this.templateWeather = _.template(this.$('#template-five-day').html());
        this.templateError = _.template(this.$('#template-five-day-error').html());

        //Listen to global events for id of city
        App.events.on('fiveDay', this.loadFiveDayForecast, this);
    },

    /**
     * Wrapper function to load the five day forecast through the collection
     *
     * @param data
     */
    loadFiveDayForecast: function (data)
    {
        this.collection.fetch({
            success: (collection) => this.loadFiveDayForecastSuccessHandler(collection),
            error: (collection, response) => this.loadFiveDayForecastErrorHandler(collection, response),
            data: {
                id: data.city.id
            }
        });
    },

    /**
     * Success Handler will add HTML of matches to this $el
     *
     * @param collection
     */
    loadFiveDayForecastSuccessHandler: function (collection)
    {
        this.$el.html(this.templateWeather({forecasts: collection.models}));
    },

    /**
     * On error, show error message in this $el
     *
     * @param collection
     * @param response
     */
    loadFiveDayForecastErrorHandler: function (collection, response)
    {
        this.$el.html(this.templateError({message: response.responseJSON.message}));
    }
});

export default FiveDayForecast;
