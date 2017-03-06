import Ember from 'ember';

export function rentalPopularity(params/*, hash*/) {
  var rental = params[0];

    if(rental.get('reviews').get('length') >= 5) {
      return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
    }
  }
    // Note: Without calling Ember.String.htmlSafe(); the line<span class="glyphicon glyphicon-fire"></span> will appear literally on the page, instead of rendering our nice glyphicon. )

export default Ember.Helper.helper(rentalPopularity);
