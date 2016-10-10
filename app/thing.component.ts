import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  templateUrl: 'views/thing.html',
  providers:[DataService]
})
export class ThingComponent {
	constructor(private dataService:DataService){};
	title = 'the thing view!';
	data = this.dataService.getStuff();
 }	