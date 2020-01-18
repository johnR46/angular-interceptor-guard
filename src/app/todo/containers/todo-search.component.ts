import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  AfterViewInit,
  ElementRef,
  ViewContainerRef
} from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Posts } from 'src/app/core/types/posts';
import { TodoApiService } from '../service/todo-api.service';
import { TodoFormComponent } from './todo-form.component';

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styles: [
    `
      table,
      th,
      td {
        border: 1px solid black;
      }
    `
  ]
})
export class TodoSearchComponent implements OnInit, AfterViewInit {
  userId: FormControl = new FormControl(0);
  posts$: Observable<Posts[]>;
  permission: boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private todoApiService: TodoApiService
  ) {}

  @ViewChild('tempRefxx', { static: false }) helloTemRef: TemplateRef<any>;

  @ViewChild('elementXXX', { static: false }) helloElementRef: ElementRef<
    HTMLParagraphElement
  >;

  @ViewChild(TodoFormComponent, { static: false, read: ViewContainerRef })
  tofoFormRef: TodoFormComponent;

  @ViewChild('container', { read: ViewContainerRef, static: false })
  ctr: ViewContainerRef;

  onSearch() {
    this.posts$ = this.todoApiService.getWithUserId(this.userId.value);
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    const view = this.helloTemRef.createEmbeddedView(null);
    // แปลว่าไม่ต้องเอาค่าไรไป

    this.ctr.insert(view);

    console.log('child', this.helloTemRef);

    console.log(this.tofoFormRef);
  }

  insert() {
    console.log((this.helloElementRef.nativeElement.innerHTML = '  jame'));
  }

  setPerrmiss(): void {
    this.todoApiService.setPermissionToCreate();
  }

  toCreate(): void {
    this.router.navigate(['./create'], {
      relativeTo: this.activatedRoute
    });
  }

  toClose(): void {
    this.router.navigate(['/']);
  }
}
