import { Directive, ElementRef, OnInit, Input} from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit {

  @Input() paraColor : string='orange';

  constructor(
    private elementRef: ElementRef,
  ) { }

  ngOnInit(){
    
    this.elementRef.nativeElement.style.backgroundColor="yellow";
  }

}