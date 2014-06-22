'use strict';

var
  _        = require('lodash'),
  query    = require('query'),
  store    = require('store.js'),
  sheet    = require('sheet'),
  modal    = require('modal'),
  Vue      = require('vue');

var el = query('.Sidebar');
var sidebar = sheet(el);

// var button = query('.toggleSibebar');
query('.toggleSibebar').addEventListener('click', function(e) {
  sidebar.show();
});

var tasksModal = modal( query('.modalContent') )
  .effect('fade-and-scale')
  .closable()
  .overlay();

query('.toggleModal').addEventListener('click', function(e) {
  tasksModal.show();
  if (!window.vm2) {
    console.log("Run");
    window.vm2 = new Vue({
      el: '#modalContent',
      data: {
        title: 'todos',
        user: {
          firstName: user.name
        },
        todos: todosList
      }
    });
  }

});

var todosList = [
  {
    done: true,
    content: 'Learn Javascript',
    tags: ['Javascript']
  },
  {
    done: false,
    content: 'Learn Vue.js',
    tags: ['Javascript','MVVM','Vue.js']
  }
];

store.set('user', { name: 'Luis', likes: 'Javascript' });
var user = store.get('user');









var vm = new Vue({
  el: '#todos',
  data: {
    title: 'todos',
    user: {
      firstName: user.name
    },
    todos: todosList
  }
});

todosList.push({
  done: false,
  content: 'Javascript Animations',
  tags: ['CSS','Velocity.js', 'Javascript']
});

Vue.directive('demo', {
    bind: function (value) {
        // do preparation work
        // e.g. add event listeners or expensive stuff
        // that needs to be run only once
        // `value` is the initial value
        console.log(value);
        this.el.style.color = "#fff";
        this.el.style.backgroundColor = this.arg;
    },
    update: function (value) {
        // do something based on the updated value
        // this will also be called for the initial value
        this.el.innerHTML =
          'argument - ' + this.arg + '<br>' +
          'key - ' + this.key + '<br>' +
          'value - ' + value
    },
    unbind: function () {
        // do clean up work
        // e.g. remove event listeners added in bind()
    }
});

var userCard = new Vue({
  el: '#usercard',
  data: {
    msg: 'hello!'
  }
});
