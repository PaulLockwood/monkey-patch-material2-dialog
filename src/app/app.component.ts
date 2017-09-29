import { Component } from '@angular/core';
import { MdDialog, MdDialogConfig } from '@angular/material';
import { DialogHelloWorldComponent } from './dialog-hello-world/dialog-hello-world.component';
import { extendObject } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(public dialog: MdDialog) { }

  openDialog() {
    const configForNewModal = new MdDialogConfig();
    // config.position = { left: '100px' };
    configForNewModal.disableClose = false;

    // debugger;

    this.dialog.open = monkey_patch_open;

    const dialogRef = this.dialog.open(DialogHelloWorldComponent, configForNewModal);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });

  }
}

function monkey_patch_open(componentOrTemplateRef, config) {
  const _this = this;
  // pkl var /** @type {?} */ inProgressDialog = this.openDialogs.find(function (dialog) { return dialog._isAnimating(); });
  // pkl // If there's a dialog that is in the process of being opened, return it instead.
  // pkl if (inProgressDialog) {
  // pkl     return inProgressDialog;
  // pkl }
  config = monkey_patch_open_applyConfigDefaults(config);
  if (config.id && this.getDialogById(config.id)) {
      throw Error('Dialog with id "' + config.id + '" exists already. The dialog id must be unique.');
  }
  const /** @type {?} */ overlayRef = this._createOverlay(config);
  const /** @type {?} */ dialogContainer = this._attachDialogContainer(overlayRef, config);
  const /** @type {?} */ dialogRef = this._attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config);
  if (!this.openDialogs.length) {
      document.addEventListener('keydown', this._boundKeydown);
  }
  this.openDialogs.push(dialogRef);
  dialogRef.afterClosed().subscribe(function () { return _this._removeOpenDialog(dialogRef); });
  this.afterOpen.next(dialogRef);
  return dialogRef;
}

function monkey_patch_open_applyConfigDefaults(config) {
  return extendObject(new MdDialogConfig(), config);
}
