import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  user = {
    name: "",
    username: "",
    password: "",
    coins: 0,
    moves: [] = []
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSignupUser() {
    this.userService.signup(this.user)
  }
}
