import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { IUser } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: IUser[];
  constructor(private appservice: AppService) { }

  ngOnInit() {
    this.appservice.getUsers().subscribe(data => this.users = data);
  }

}
