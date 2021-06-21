import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/model/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  @Input() selectedContactId: string;
  @Output() onSelectContact = new EventEmitter();

  subscription: Subscription

  constructor(private contactService: ContactService) { }
  contact: Contact;

  ngOnInit(): void {
    this.subscription = this.contactService.getContactById(this.selectedContactId).subscribe(contact => { this.contact = contact })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }


}
