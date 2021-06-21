import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from '../../model/user.model';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  // @Input() users: User[];
  // @Output
  constructor() { }

  ngOnInit(): void {
  }

}
