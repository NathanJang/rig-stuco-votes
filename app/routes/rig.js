import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return {
      studentId: '',
      options: [
        {
          key: 'OP1',
          name: 'Michael Chang',
          isSelected: false
        },
        {
          key: 'OP2',
          name: 'Eri Kato',
          isSelected: false
        },
        {
          key: 'OP3',
          name: 'Nora Tao',
          isSelected: false
        },
        {
          key: 'OP4',
          name: 'Albert Xu',
          isSelected: false
        },
        {
          key: 'OP5',
          name: 'Lena Zhou',
          isSelected: false
        }
      ]
    };
  }
});
