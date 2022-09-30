import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Profile Editor';
  displayItem: User = {
    name: 'Joe',
    age: 24,
    favoriteColor: 'Orange',
    favoriteAnimal: 'Dog',
  };

  displayEdit: boolean = false;
  toggleEdit(): void {
    this.displayEdit = !this.displayEdit;
  }
}
