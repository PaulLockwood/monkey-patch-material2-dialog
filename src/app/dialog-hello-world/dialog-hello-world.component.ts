import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-hello-world',
  templateUrl: './dialog-hello-world.component.html',
  styleUrls: ['./dialog-hello-world.component.scss']
})
export class DialogHelloWorldComponent implements OnInit {

  constructor(
    public dialogRef: MdDialogRef<DialogHelloWorldComponent>,
    @Inject(MD_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

}
