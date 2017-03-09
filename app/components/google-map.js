import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap(rental) {
      // debugger;
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(rental.get('latitude'), rental.get('longitude')),
        zoom: 20
      };
      this.get('map').findMap(container, options);
    }
  }
});
