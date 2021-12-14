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
  showReact: boolean =  JSON.parse(localStorage.getItem('showReact') || 'true');
  showStencil: boolean =  JSON.parse(localStorage.getItem('showStencil') || 'true');

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
      
  }

  showAngularChanged(event: MatSlideToggleChange) {
    this.showAngular = event.checked;
    localStorage.setItem('showAngular', event.checked.toString());
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
    this.snackBar.open('Angular button clicked', '', {duration: 3000});
  }


}
