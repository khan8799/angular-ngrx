import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {
  @HostBinding('class.active') display: boolean = false;

  constructor() { }

  @HostListener('click') toggleDropDown() {
    this.display = !this.display;
  }

}
