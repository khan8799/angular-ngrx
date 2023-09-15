import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainBowColor]'
})
export class RainBowColorDirective {
  colors = [
    'Violet',
    'Indigo',
    'Blue',
    'Green',
    'Yellow',
    'Orange',
    'Red',
  ];

  @HostBinding('style.color') color: string;

  constructor() { }
  
  @HostListener('mouseover') changeColor() {
    const colorPick = Math.floor(Math.random() * this.colors.length);
    this.color = this.colors[colorPick];
  }

}
