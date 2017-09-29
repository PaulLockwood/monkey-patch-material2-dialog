import { Component } from '@angular/core';
import { MdDialog, MdDialogConfig } from '@angular/material';
import { DialogHelloWorldComponent } from './dialog-hello-world/dialog-hello-world.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(public dialog: MdDialog) { }

  openDialog() {
    const config = new MdDialogConfig();
    // config.position = { left: '100px' };
    config.disableClose = false;
    // config.
    const dialogRef = this.dialog.open(DialogHelloWorldComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });

  }

}
