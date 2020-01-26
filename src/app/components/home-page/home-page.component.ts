import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTodoDialogComponent } from '../add-todo-dialog/add-todo-dialog.component';
import { TodoService } from '../../services/todo.service';
import { Store, select} from '@ngrx/store';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { SET_TODOS } from '../../reducers/todo-reducer';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  //arrays
  allTasks: any[] = [];
  todo: any[] = [];
  done: any[] = [];

  constructor(
    public dialog: MatDialog,
    private todoService: TodoService,
    private store: Store<any>
  ) {
    store.pipe(select('todos')).subscribe(allTasks =>{
      this.allTasks = allTasks || [];
      this.todo = this.allTasks.filter(t => !t.done);
      this.done = this.allTasks.filter(t => t.done);
    });
   }

  ngOnInit() {
    this.getTodos();
  }
  //Method to show the dialog
  public openAddTodoDialog(){
    const dialogRef = this.dialog.open(AddTodoDialogComponent,{
      width: '70vw',
      data:{}
    });

    //after to close the dialog
    dialogRef.afterClosed().subscribe(res=>{
      console.log("the dialogos was closed");
    });
  }
  //method to get all tasks 
  public getTodos(){
    this.todoService.getTodos().subscribe(res =>{
      this.store.dispatch({ type: SET_TODOS, playload: res});
    });
  }

  //Method to drop the item
  drop(event: CdkDragDrop<any[]>){
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }else{
      transferArrayItem(event.previousContainer.data,event.container.data, event.previousIndex, event.currentIndex);
    }

    let data = event.container.data[0];
    data.done = !data.done;
    this.todoService.editTodo(data).subscribe(res =>{});
  }

  //Method to remove a task
  removeTodo(index:number, tasks: any[]){
    const todoId = tasks[index].id;
    this.todoService.removeTodo(todoId).subscribe(res =>{
      this.getTodos();
    });
  }

}
