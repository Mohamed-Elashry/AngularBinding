import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrl: './display-details.component.scss'
})
export class DisplayDetailsComponent {
 isDisplay = true;
 displayStylePress = "";
 isPressCounter = 0;
 backgroundColorAfter5Press = "";
 colorAfter5PressClass = "";
 onPressDisplay(){
  ++this.isPressCounter;
  this.isDisplay = !this.isDisplay;
  if(this.isDisplay)
    this.displayStylePress = "";
  else
  this.displayStylePress = "none";
  if(this.isPressCounter > 5)
  {
    this.backgroundColorAfter5Press = "blue";
    this.colorAfter5PressClass = "text-white";
  }
}
}
