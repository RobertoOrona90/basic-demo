import { TestBed } from '@angular/core/testing';
import { UserServiceService } from './user-service.service';
import { User } from '../model/user.model';

describe('UserServiceService', () => {
  let service: UserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize users with some values in the constructor', () => {
    const initialUsers: User[] = [
      { id: 1, name: 'Juan', role: 'Admin', isActive: true },
      { id: 2, name: 'Ana', role: 'Vendedor', isActive: true },
      { id: 3, name: 'Pedro', role: 'Vendedor', isActive: false },
    ];
    expect(service.users().length).toBeGreaterThan(0);
  });

  it('should add a user', () => {
    const newUser: User = { id: 16, name: 'New User', role: 'Admin', isActive: true };
    service.addUser(newUser);
    expect(service.users()).toContain(newUser);
  });

  it('should delete a user by id', () => {
    const userIdToDelete = 1;
    service.deleteUser(userIdToDelete);
    expect(service.users().some(user => user.id === userIdToDelete)).toBeFalse();
  });

  it('should toggle the status of a user by id', () => {
    const userIdToToggle = 2;
    const userBeforeToggle = service.users().find(user => user.id === userIdToToggle);
    service.toggleStatus(userIdToToggle);
    const userAfterToggle = service.users().find(user => user.id === userIdToToggle);
    expect(userAfterToggle?.isActive).toBe(!userBeforeToggle?.isActive);
  });
});
