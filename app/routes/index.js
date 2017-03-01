import Ember from 'ember';

export default Ember.Route.extend({
  // model() {
  //    return this.store.findAll('rental');
  //  },
  model() {
    // select RSVP if you want to sync (receive all) data before you display.
    // return {
    //   rentals: this.store.findAll('rental'),
    //   reviews: this.store.findAll('review')
    // };

    return Ember.RSVP.hash({
      announcements:  this.store.findAll('announcement'),
      rentals: this.store.findAll('rental'),
      reviews: this.store.findAll('review')
    });

  },
  actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },
    saveAnnouncement(params) {
      var newAnnouncement = this.store.createRecord('announcement', params);
      newAnnouncement.save();
      this.transitionTo('index');
    },
    destroyAnnouncement(announcement) {
      announcement.destroyRecord();
      this.transitionTo('index');
    }
  }
});
