import Ember from 'ember';

export default Ember.Controller.extend({
  shouldDisableSubmitButton: Ember.computed('model.studentId', {
    get: function () {
      return Ember.isEmpty(this.get('model.studentId'));
    }
  }),
  actions: {
    submit: function (model) {
      Ember.run(function () {
        var formData = {
          schoolyear: '1415',
          studentnumber: model.studentId
        };
        model.options.forEach(function (option) {
          if (option.isSelected) {
            formData[option.key] = option.name;
          }
        });
        Ember.Logger.log(formData);
        Ember.$.ajax({
          url: '/proxy/index.php',
          method: 'POST',
          data: formData
        });
      });
    }
  }
});
