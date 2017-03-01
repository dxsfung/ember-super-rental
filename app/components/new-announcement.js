import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },
    announcementFormHide() {
      this.set('addNewAnnouncement', false);
    },
      saveAnnouncement() {
      var params = {
        date: this.get('date') ? this.get('date') : "",
        title: this.get('title') ? this.get('title') : "",
        message: this.get('message') ? this.get('message') : "",
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('saveAnnouncement', params);
      this.set('date', "");
      this.set('title', "");
      this.set('message', "");
    }
  }
});
