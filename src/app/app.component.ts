import { Component } from '@angular/core';
import {Todo} from './todo.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO (CRUD)';
  task = '';
  todos : Todo[] = [{task:'hello', time: new Date, mode: false},
  {task:'mello', time: new Date, mode: false},
];
  editval="Edit"
  clicked = false;
  add(){
    this.todos.push(new Todo(this.task,new Date, false));
    this.task = '';
  }

  edit(i,z){
  if(z.currentTarget.innerText == 'Edit' && this.clicked == false){
    this.todos[i].mode = true;
    z.currentTarget.innerText = 'Update'
    this.clicked = true;
  }else if(z.currentTarget.innerText == "Update"){
    this.todos[i].mode = false;
    z.currentTarget.innerText = 'Edit'
    this.clicked = false;
  }
}
 
  delete(i){
    this.todos.splice(i, 1);
  }

}

