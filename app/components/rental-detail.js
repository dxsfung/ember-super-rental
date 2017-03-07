import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

    sortBy: ['rating:desc'],
    sortedReviews: Ember.computed.sort('rental.reviews', 'sortBy'),

  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
    },
    delete(rental) {
      if (confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    },
    destroyReview(review) {
      this.sendAction('destroyReview', review);
    }
  }
});
