import { Component, signal, Signal } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../../model/user.model';
import { of } from 'rxjs';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  users: Signal<User[]>;

  constructor(private userService: UserServiceService) {
    this.users = this.userService.users;
  }

  delete(id: number) {
    this.userService.deleteUser(id);
  }

  toggle(id: number) {
    this.userService.toggleStatus(id);
  }
}