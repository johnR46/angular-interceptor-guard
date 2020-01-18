import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'input[appTodo]',
  exportAs: 'appTodo'
})
export class TodoDirective {
  name = 'hello';
  lname = ' directive export as ';

  isNum: boolean;

  numcheck: number;

  @Input()
  public set checkisDigit(n: number) {
    if (n) {
      this.numcheck = n;
    }
  }

  checkDigit(): void {
    console.log('x');

    if (typeof this.checkisDigit === 'number') {
      console.log('x');

      this.isNum = true;
    } else {
      this.isNum = false;
    }
  }
}
