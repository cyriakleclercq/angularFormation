import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  messageService: string = "message provenant du service";

  constructor() { }

  getMessageService = () => {
    return this.messageService;
  }

  getPost = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(res => console.log(res))
  }


}
