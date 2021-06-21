import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/model/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {
  }

  contact: Contact;
  subscription: Subscription

  async ngOnInit(): Promise<void> {
    this.subscription = this.route.data.subscribe(data => {
      this.contact = data.contact
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  onGoBack(){
    this.router.navigate(['/contact'])
  }

  async onGoNeighborContact(type:string){
    let nextContactId = await this.contactService.getNeighborContactId(this.contact._id , type).toPromise()
    this.router.navigate(['/contact', nextContactId])
  }




}
