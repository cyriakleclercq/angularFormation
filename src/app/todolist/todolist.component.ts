import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Task } from './Itask';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  tab: Task[] = [{ id: Date.now(), task: 'vaisselle', state: true, update: false }];

  messageService: string;

  constructor(private service: UserService) { }

  add(task: HTMLInputElement) {
    if (task.value !== '') {
      this.tab.push({ id: Date.now(), task: task.value, state: false, update: false });
    }
    task.value = '';
  }

  delete(id: number) {
    this.tab = this.tab.filter(x => x.id !== id);
  }

  update(todo: Task) {
    todo.update === true ? todo.update = false : todo.update = true;
  }

  check(todo: Task) {
    todo.state === true ? todo.state = false : todo.state = true;
  }

  getMessage = () => {
    this.messageService = this.service.getMessageService();
  }

  getPost = () => {
    return this.service.getPost();
  }

  ngOnInit() {
    this.getMessage();
    console.log(this.messageService);

    this.getPost();
  }

}
