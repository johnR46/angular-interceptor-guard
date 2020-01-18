import { Component, OnInit } from '@angular/core';
import { CanDeactive } from 'src/app/core/types/can-deactive';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styles: []
})
export class TodoFormComponent implements OnInit, CanDeactive {
  isSkipCheck: boolean;
  canDeactive: boolean = true; // defaule no edit form

  todoForm: FormGroup = this.fb.group({
    f1: [undefined],
    f2: [undefined],
    f3: [undefined]
  });

  constructor(
    private fb: FormBuilder,
    private roter: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.todoForm.valueChanges.subscribe(b => {
      this.canDeactive = false;
      console.log('status change ');
    });
  }

  closePage(): void {
    this.roter.navigate(['/'], { relativeTo: this.activatedRoute });
  }
}
