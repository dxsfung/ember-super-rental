import Ember from 'ember';

export default Ember.Service.extend({
  googleMaps: window.google.maps,
  findMap(container, options) {
    debugger;
    return new this.googleMaps.Map(container, options);
  },
  center(latitude, longitude) {
    debugger;
    return new this.googleMaps.LatLng(latitude, longitude);
  }
});
