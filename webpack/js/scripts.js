// var webpack = require('webpack');
import $ from 'jquery';
console.log($);
require('style-loader!css-loader!../css/style.css');

import {tmpl} from "./tmpl.js";
import {Model} from "./model.js";
import {View} from "./view.js";
import {Controller} from "./controller.js";



$(function() {

  var firstToDoList = ['learn js', 'learn html', 'make coffee'];
  var model = new Model(firstToDoList);
  var view = new View(model);
  var controller = new Controller(model, view);

});
