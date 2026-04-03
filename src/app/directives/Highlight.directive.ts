import { Directive } from "@angular/core";

@Directive({
  selector:'[highlight]',
  host:{
    'click':'data($event)'
  }
})
export class HighlightDirective{
data(event:MouseEvent){
  console.log(event);

}
}
