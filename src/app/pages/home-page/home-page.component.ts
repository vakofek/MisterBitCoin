import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from '../../model/user.model';
import { UserService } from 'src/app/services/user.service';
import { BitconService } from 'src/app/services/bitcoin.service';
import { ThrowStmt } from '@angular/compiler';
import { Contact } from 'src/app/model/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private userService: UserService, 
    private contactService: ContactService, 
    private bitconService: BitconService
    
    ) { }
  userSubscription: Subscription;
  contactSubscription:Subscription
  user: User = null
  // bitcoinValues = this.bitconService.getBitcoinValue()
  
  bitcoinValues: any = null
  coins: number = 0
  contacts:Contact[]
 

  ngOnInit(): void {
    this.userSubscription = this.userService.user$.subscribe((user: User) => { this.user = user });
    this.bitcoinValues = this.bitconService.getMarketPrice();
    this.contactService.loadContacts()
    this.contactSubscription = this.contactService.contacts$.subscribe(contacts=>{
      this.contacts = contacts.filter((contact, idx)=>{
        return (idx < 4) && contact
      })
      console.log( this.contacts);
      
    })
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  getCurrValue() {
    if (this.bitcoinValues) return this.bitcoinValues[0];
  }

  async onAddCoins() {
    const updateUser = { ...this.user, coins: this.user.coins + this.coins }
    await this.userService.updateUser(updateUser)
    this.coins = 0;
  }


}
