import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  public users: User[] = [
    {
      Id: 1,
      Email: 'email@email.com',
      Name: 'Eduard',
      Password: '123',
    },
  ];
}
