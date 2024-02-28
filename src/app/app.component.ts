import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ColumnManagerComponent} from "./components/column-manager/column-manager.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dynamicColumns';
  constructor(private matDialog : MatDialog) {
  }
  openModal() {
    const ref = this.matDialog.open(ColumnManagerComponent , { width:'60%'})
    ref.backdropClick().subscribe(() => {
      console.log(23)
      return;
    })
  }
}
