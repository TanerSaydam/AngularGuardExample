import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: { id: number, name: string, lastName: string }[] = [
    { id: 0, name: 'Taner', lastName: 'Saydam' },
    { id: 1, name: 'Tugay', lastName: 'Saydam' },
    { id: 2, name: 'Tahir', lastName: 'Saydam' }
  ];

  constructor() { }

  getUser(id: number) {
    //console.log(id);
    let user = this.users.filter(p => p.id == id);
    return user[0];
  }

  update(id: number, name: string, lastName: string) {
    try {
      let userModel = this.users.filter(p => p.id == id)[0];
      let index = this.users.indexOf(userModel);
      this.users[index].name = name;
      this.users[index].lastName = lastName;
      return true
    } catch (error) {
      return false
    }
  }
}
