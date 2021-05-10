import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

 todos:Todo[]=[];
 id;
 updatedVal="";

 @ViewChild('box') inputName;

  constructor(private todoService : TodoService) { }

  ngOnInit(): void {
    this.getTodos();
  }


  add(val){
    console.log("add event ");
    let count=this.todos.length+1;
       
      let task={
        id:count++,
        description:val
      }

    this.todos.push(task);
    console.log(val)
    console.log(this.todos)
    // var el=document.getElementById("addVal");
    //  el.nodeValue="";
    this.inputName.nativeElement.value='';
  }

  edit(id,description){
   
    this.id=id;
    this.updatedVal=description;
  }


  update(index){
    
    this.todos[index].description=this.updatedVal;
    // console.log(index,description);
    this.id="";
  }



  getTodos(){
    this.todos=this.todoService.getTodosFnc();
  }

  delete(val,index){
    
  //  this.todos= this.todos.filter(ele=>ele.id!=val);

    this.todos.splice(index,1);
    console.log("index :",val);
    // console.log("updated array ",this.todos)

   }
  



}
