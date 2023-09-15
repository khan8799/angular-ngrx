import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButtonEffect]'
})
export class ButtonEffectDirective {

  constructor(
    private element: ElementRef<HTMLButtonElement>,
    private renderer: Renderer2
  ) { }

  @HostListener('mouseover') onMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement, 'font-size', '1rem');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '0.25rem 1rem');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, 'font-size', '0.875rem');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '0.25rem 0.5rem');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s')
  }

}
