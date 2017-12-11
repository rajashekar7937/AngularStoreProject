import { Directive, ElementRef,OnInit,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
@Input() defaultColor:string;
@Input() highlightColor: string;
  constructor(private hostElement:ElementRef) { }

  ngOnInit()
  {
    console.log(this.hostElement);
    this.setBackgroundColor(this.defaultColor);
  }
@HostListener('mouseenter')
mouseOver(){
  this.setBackgroundColor(this.highlightColor);
}
@HostListener('mouseleave')
mouseLeave(){
  this.setBackgroundColor(this.defaultColor);
}
setBackgroundColor(color:string)
{
  this.hostElement.nativeElement.style.backgroundColor=color;
}
}
