import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() viewClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleView(view){
    this.viewClicked.emit(view);
  }

}