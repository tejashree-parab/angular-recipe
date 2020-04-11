import { 
  Directive,
  ElementRef, 
  Renderer2, 
  HostListener, 
  AfterViewInit
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements AfterViewInit{
  isOpen: boolean = false;
  childEL: ElementRef;

  constructor(private elementRef: ElementRef, private renderer: Renderer2 ){}
  
  ngAfterViewInit(): void {
    this.childEL = this.elementRef.nativeElement.querySelector('.dropdown-menu')
  }
  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
    this.isOpen === true? 
      this.renderer.addClass(this.childEL,'show'):
      this.renderer.removeClass(this.childEL,'show');
  }
}
