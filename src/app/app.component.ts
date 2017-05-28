import { RecipeService } from './recipes/recipe.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService]
})
export class AppComponent {
  title = 'app works!';
  currentView: string = 'recipes';
  onGameStart($event){
    console.log('Event Object: ', $event);
  }

  changeView(viewName){
    this.currentView = viewName;
  }
}
