import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cascade';
  constructor(private e:ElementRef<HTMLElement>){
  let element=e.nativeElement;
  element.style.scrollSnapType='x mandatory'
  }
}
