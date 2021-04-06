import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbersa: number[]

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) {
    
   }

   ngOnInit():void{
    for(let number of this.numbersa){
      this.container.createEmbeddedView(
        this.template, {$implicit: number});
    }
   }

}
