import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'transer-preview',
  templateUrl: './transer-preview.component.html',
  styleUrls: ['./transer-preview.component.scss']
})
export class TranserPreviewComponent implements OnInit {
  @Input() move: { type: string, transferAt: number, userId?: string, contactId?: string, coins: number }
  @Input() title: string
  
  constructor(private contactService: ContactService) { }

  contactName: string
  subscription: Subscription

  ngOnInit(): void {
    this.subscription = this.contactService.getContactById(this.move.contactId).subscribe(contact => this.contactName = contact.name);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
