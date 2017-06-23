import {View} from 'backbone';
import PlacesRouter from '../routers/CityRouter';

const TeamLinks = View.extend({
    router: null,

    events: {
        'click button': 'clickHandler'
    },

    initialize: function ()
    {
        // Initialize the matches router to activate navigation
        this.router = new PlacesRouter();
    },

    /**
     * Click handler for links, retrieve data attributes and navigate router
     *
     * @param e
     */
    clickHandler: function (e)
    {
        e.preventDefault();

        //Get value from input
        let city = e.delegateTarget[0].value;
        let url = 'forecast/' + city;

        //Use trigger & replace to update URL and make the router listen to change
        this.router.navigate(url, {trigger: true, replace: true});

    }
});

export default TeamLinks;
