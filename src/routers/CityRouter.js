import {Router} from 'backbone';

const CityRouter = Router.extend({
    routes: {
        'forecast/:city': 'cityAction'
    },

    /**
     * Route callback, used to trigger global event
     *
     * @param city
     */
    cityAction: function (city)
    {
        App.events.trigger('newCity', {
            city: city
        });
    }
});

export default CityRouter;
