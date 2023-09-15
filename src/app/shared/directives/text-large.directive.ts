import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextLarge]'
})
export class TextLargeDirective {
  constructor(
    private element: ElementRef<HTMLHeadingElement>,
    private renderer: Renderer2
  ) {
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.renderer.setStyle(this.element.nativeElement, 'font-size', 'calc(2rem + .6vw)');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '1s');

  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, 'font-size', 'calc(1.3rem + .6vw)')
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
  }

}
