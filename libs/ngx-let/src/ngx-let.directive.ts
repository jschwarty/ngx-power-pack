import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

class NgxLetContext {
  ngxLet: any;
}

@Directive({
  selector: '[ngxLet]'
})
export class NgxLetDirective {
  private _context: NgxLetContext = new NgxLetContext();

  constructor(
    viewContainerRef: ViewContainerRef,
    templateRef: TemplateRef<NgxLetContext>
  ) {
    viewContainerRef.createEmbeddedView(templateRef, this._context);
  }

  @Input()
  set ngxLet(value: any) {
    this._context.ngxLet = value;
  }
}
