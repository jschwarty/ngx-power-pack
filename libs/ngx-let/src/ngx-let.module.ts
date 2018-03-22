import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLetDirective } from './ngx-let.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxLetDirective],
  exports: [NgxLetDirective]
})
export class NgxLetModule {}
