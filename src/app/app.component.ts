import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MisterBitCoin';

  constructor(private userService: UserService) { }
  
  ngOnInit(): void {
    this.userService.loadUsersDB();
  }
  // selectedPage: string = 'home'

  // onSetPage(selectedPage: string) {
  //   this.selectedPage = selectedPage;
  // }
}
