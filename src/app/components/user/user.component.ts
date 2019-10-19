import { Component, OnInit } from '@angular/core';
// import { Address } from 'cluster';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  hobbies: string[];
  address: Address;
  isEdit: boolean = false;
  posts: Post[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.name = 'Hector';
    this.age = 38;
    this.email = 'user@gmail.com';
    this.hobbies = ['Write Code', 'Dance', 'Music'];
    this.address = {
      street: 'Main st',
      city: 'Boston',
      state: 'Rhode Island'
    };
    this.dataService.getPost().subscribe(post => {
      this.posts = post;
    });
  }

  onClick() {
    this.name = 'Delcid';
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  addHobby(hobby) {
    this.hobbies.unshift(hobby);
    return false;
  }
}

interface Address {
  street: string;
  city: string;
  state: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
