import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },
    rentalFormHide() {
      this.set('addNewRental', false);
    },
      saveRental1() {
      var params = {
        owner: this.get('owner') ? this.get('owner') : "",
        city: this.get('city') ? this.get('city') : "",
        type: this.get('type') ? this.get('type') : "",
        image: this.get('image') ? this.get('image') : "",
        bedrooms: this.get('bedrooms') ? this.get('bedrooms') : "",
        cost: parseInt(this.get('cost')) ? this.get('cost') : ""
      };
      this.set('addNewRental', false);
      this.sendAction('saveRental2', params);
      this.set('owner', "");
      this.set('city', "");
      this.set('type', "");
      this.set('image', "");
      this.set('bedrooms', "");
      this.set('cost',"");
    }
  }
});
