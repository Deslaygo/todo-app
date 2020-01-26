import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { getTreeNoValidDataSourceError } from '@angular/cdk/tree';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }
  //method to get all tasks
  getTodos(){
    return this.http.get(`${environment.apiUrl}/todos`);
  }
  //method to add a task
  addTodo(data){
    return this.http.post(`${environment.apiUrl}/todos`,data);
  }
  //method to edit a task
  editTodo(data){
    return this.http.put(`${environment.apiUrl}/todos`,data);
  }
  //method to remove a task 
  removeTodo(id){
    return this.http.delete(`${environment.apiUrl}/todos/${id}`);
  }
}


