import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

	things: String[] = [
		'what',
		'when',
		'who',
		'which',
		'wow',
		'why'
	]

	getStuff(){
		return this.things;
	}

}

// export class HeroService {
//   private heroes: Hero[] = [];

//   constructor(
//     private backend: BackendService,
//     private logger: Logger) { }

//   getHeroes() {
//     this.backend.getAll(Hero).then( (heroes: Hero[]) => {
//       this.logger.log(`Fetched ${heroes.length} heroes.`);
//       this.heroes.push(...heroes); // fill cache
//     });
//     return this.heroes;
//   }
// }
