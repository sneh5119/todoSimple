import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodosFnc(){
    return [
      {
        id:1,
        title:"todo1",
        description:"running"
      },
      {
        id:2,
        title:"todo2",
        description:"walking"
      },
      {
        id:3,
        title:"todo3",
        description:"cooking"
      },
      {
        id:4,
        title:"todo4",
        description:"dishes"
      },
      {
        id:5,
        title:"todo5",
        description:"car washing"
      },

    ];
  }
}
