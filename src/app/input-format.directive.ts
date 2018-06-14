import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  constructor(private el: ElementRef) { }
  
  @Input('appInputFormat') formatStr;
  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    if(this.formatStr == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();
      
      
  }

}
