import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MisterBitCoin';

  selectedPage: string = 'home'

  onSetPage(selectedPage: string) {
    this.selectedPage = selectedPage;
  }
}
