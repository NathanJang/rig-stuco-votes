import Ember from 'ember';

export default Ember.Controller.extend({
  shouldDisableSubmitButton: Ember.computed('model.studentId', 'isAgreed', 'isSubmitting', 'isDoneSubmitting', {
    get: function () {
      return Ember.isEmpty(this.get('model.studentId')) ||
        !this.get('isAgreed') ||
        (this.get('isSubmitting') && !this.get('isDoneSubmitting'));
    }
  }),
  isAgreed: false,
  isSubmitting: false,
  isDoneSubmitting: false,
  actions: {
    submit: function (model) {
      var _this = this;
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
        Ember.Logger.log('Submitting', formData);
        _this.set('isSubmitting', true);
        _this.set('isDoneSubmitting', false);
        Ember.$.ajax({
          url: '/proxy/index.php',
          method: 'POST',
          data: formData
        }).done(function () {
          _this.set('isDoneSubmitting', true);
        }).fail(function () {}).always(function () {
          _this.set('isSubmitting', false);
        });
      });
    }
  }
});
