import { Injectable, signal } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {
  private _users = signal<User[]>([]);
  users = this._users.asReadonly();

  constructor() {
    this._users.set([
      { id: 1, name: 'Juan', role: 'Admin', isActive: true },
      { id: 2, name: 'Ana', role: 'Vendedor', isActive: true },
      { id: 3, name: 'Pedro', role: 'Vendedor', isActive: false },
      { id: 4, name: 'María', role: 'Admin', isActive: true },
      { id: 5, name: 'Luis', role: 'Vendedor', isActive: false },
      { id: 6, name: 'Laura', role: 'Vendedor', isActive: true },
      { id: 7, name: 'Carlos', role: 'Admin', isActive: false },
      { id: 8, name: 'Sofía', role: 'Vendedor', isActive: true },
      { id: 9, name: 'Andrés', role: 'Vendedor', isActive: false },
      { id: 10, name: 'Clara', role: 'Admin', isActive: true },
      { id: 11, name: 'Javier', role: 'Vendedor', isActive: false },
      { id: 12, name: 'Patricia', role: 'Vendedor', isActive: true },
      { id: 13, name: 'Fernando', role: 'Admin', isActive: false },
      { id: 14, name: 'Gabriela', role: 'Vendedor', isActive: true },
      { id: 15, name: 'Ricardo', role: 'Vendedor', isActive: false }
    ]);
  }

  addUser(user: User) {
    this._users.update(users => [...users, user]);
  }

  deleteUser(id: number) {
    this._users.update(users => users.filter(u => u.id !== id));
  }

  toggleStatus(id: number) {
    this._users.update(users =>
      users.map(u => u.id === id ? { ...u, isActive: !u.isActive } : u)
    );
  }
}