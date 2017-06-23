import {Model} from 'backbone';

/**
 * Model for every match in the collection
 *
 * @constructor
 */
const City = Model.extend({
    lon: '',
    lat: '',
    id: ''
});

export default City;
