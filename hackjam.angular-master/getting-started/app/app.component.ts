import { Component } from '@angular/core';
import { mockBooks, Book } from './mocks/books';


@Component({
  selector: 'bookstore',
  // template: ``,
  templateUrl: '../app/app.template.html'
})

export class AppComponent {
  books: Book [] = []; // use mocks data instead
  categories: String [] = ['All', 'Web']; // use mocks data instead
  navClosed: Boolean = true;

  clicked() {
    console.log('Will be implemented in the next section');
  }

  search(){}

  toggleSideBar(){
    this.navClosed = !this.navClosed;
  }
}
