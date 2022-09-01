import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[end]',
})
export class EndDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'margin-left', 'auto');
  }
}
