import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'cvs-container';

  showAngular: boolean =  JSON.parse(localStorage.getItem('showAngular') || 'true');  // converts string to boolean
  showAngularLib: boolean =  JSON.parse(localStorage.getItem('showAngularLib') || 'true');
  showReact: boolean =  JSON.parse(localStorage.getItem('showReact') || 'true');
  showStencil: boolean =  JSON.parse(localStorage.getItem('showStencil') || 'true');

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
      
  }

  showAngularChanged(event: MatSlideToggleChange) {
    this.showAngular = event.checked;
    localStorage.setItem('showAngular', event.checked.toString());
  }
  showAngularLibChanged(event: MatSlideToggleChange) {
    this.showAngularLib = event.checked;
    localStorage.setItem('showAngularLib', event.checked.toString());
  }

  showReactChanged(event: MatSlideToggleChange) {
    this.showReact = event.checked;
    localStorage.setItem('showReact', event.checked.toString());
  }

  showStencilChanged(event: MatSlideToggleChange) {
    this.showStencil = event.checked;
    localStorage.setItem('showStencil', event.checked.toString());
  }

  angularButtonClicked(event: any) {
    this.snackBar.open(event.detail, '', {duration: 3000});
  }
  angularLibButtonClicked(event: any) {
    this.snackBar.open(event, '', {duration: 3000});
  }
  stencilButtonClicked(event: any) {
    this.snackBar.open(`We are searching for pharmacies near zipcode ${event.detail.value}. Please wait..`, '', {duration: 3000});
  }
  reactButtonClicked(event: any) {
    console.log('event', event);
    this.snackBar.open(`We are searching for pharmacies near zipcode ${event.detail.zipcode}. Please wait..`, '', {duration: 3000});
  }

}
