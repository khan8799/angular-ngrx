import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTextHighlight]'
})
export class TextHighlightDirective {
  @Input() appTextHighlight: string;
  @Input() defaultColor: string;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    (this.elementRef.nativeElement as HTMLElement).style.color = this.defaultColor || this.appTextHighlight;
  }
}
