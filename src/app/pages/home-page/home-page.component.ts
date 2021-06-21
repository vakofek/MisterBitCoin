import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from '../../model/user.model';
import { UserService } from 'src/app/services/user.service';
import { BitconService } from 'src/app/services/bitcoin.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private userService: UserService, private bitconService: BitconService) { }
  subscription: Subscription;
  user: User = null
  // bitcoinValues = this.bitconService.getBitcoinValue()
  bitcoinValues: any = null

  ngOnInit(): void {
    this.subscription = this.userService.getUser().subscribe(user => { this.user = user });
    this.bitcoinValues = this.bitconService.getMarketPrice();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getCurrValue() {
    if (this.bitcoinValues) return this.bitcoinValues[0];
  }

}
