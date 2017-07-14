import { extendObservable } from 'mobx';
import timing from 'utils/timing';

/**
 * This store planets.
 */
export default class Planets {

  /**
   * Constructor
   * @param {object} Domain store
   */
  constructor({ fighters = {} }, network) {
    this.fetch = network.fetch;
    extendObservable(this, fighters);
  }

  /**
   * @var {string} API endpoint
   */
  apiUrl = 'http://ufc-data-api.ufc.com/api/v3/us/fighters';

  /**
   * Fetch all planets
   * @param {Number} Page number
   * @return {Promise}
   */
  @timing.promise
  fetchAll({ page = 1 } = {}) {
    console.log("jhkgbkuj");
    return this.fetch(`${this.apiUrl}`);
  }

  /**
   * Fetch planet by id
   * @param {string} Planet Id
   * @return {Promise}
   */
  @timing.promise
  fetchById(id) {
    return this.fetch(`${this.apiUrl}/${id}/`);
  }
}
