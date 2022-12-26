import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() highlightColor = ""
  constructor(private el:ElementRef) {
    // this.el.nativeElement.style.backgroundColor = 'Red'
  }

  @HostListener('mouseenter')onMouseEnter(){
    this.el.nativeElement.style.backgroundColor = 'Red'
    console.log('MouseEnter')
  }
  @HostListener('mouseleave')onMouseLeave(){
    this.el.nativeElement.style.backgroundColor = 'Blue'
    console.log('MouseLeave')
  }
}
