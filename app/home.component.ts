import { Component } from '@angular/core';
import { GrowDirective } from './grow.directive';
@Component({
  templateUrl: 'views/home.html'
})
export class HomeComponent {
	hey = "whow what how";
	things = ['who','when','where','why'];
	clickThing = function(thing){
		this.what = thing;
	};
	style = {
		color:'blue'
	}
 }