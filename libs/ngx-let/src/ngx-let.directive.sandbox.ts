import { sandboxOf } from 'angular-playground';
import { of } from 'rxjs/observable/of';
import { NgxLetDirective } from './ngx-let.directive';

export default sandboxOf(NgxLetDirective)
  .add('with async', {
    template: `<div *ngxLet="person$ | async as person">{{person.name}}</div>`,
    context: {
      person$: of({name: 'Mike'})
    }
  });
