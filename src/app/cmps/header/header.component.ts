import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  subsription: Subscription
  user: User

  ngOnInit(): void {
    this.subsription = this.userService.user$.subscribe((user: User) => { this.user = user })
  }

  ngOnDestroy(): void {
    this.subsription.unsubscribe()
  }

  async onLogout() {
    await this.userService.logout()
    this.router.navigate(['/'])
  }



}
