import {Model} from 'backbone';

/**
 * Model for every match in the collection
 *
 * @constructor
 */
const DailyForecast = Model.extend({
    /**
     * Get date string for each of the objects in collection
     *
     * @param index
     */
    getDate: (index) => {
        let d = new Date();
        d.setHours(new Date().getHours() + 3 * index);
        let dateString = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear() + " - " + d.getHours() + "h";
        return dateString;
    }
});

export default DailyForecast;
