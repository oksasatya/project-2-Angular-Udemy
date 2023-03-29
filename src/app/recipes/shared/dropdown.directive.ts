import { Directive, HostBinding, HostListener,ElementRef } from "@angular/core";

@Directive({
  selector : '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click',['$event']) toogleOpen(event : Event){
    this.isOpen = this.elref.nativeElement.contains(event.target);
  }


  constructor(private elref : ElementRef){}
}
