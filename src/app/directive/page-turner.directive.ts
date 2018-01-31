import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPageTurner]'
})
export class PageTurnerDirective {
  section: HTMLDivElement;

  constructor(private element: ElementRef) { }

}
