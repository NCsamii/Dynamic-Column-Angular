import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ColumnManagerComponent} from "./components/column-manager/column-manager.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dynamicColumns';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'}
  ];
  disable : any[]=[]
  columns = [
    {
      name: 'position',
      display: 'شناسه'
    }, {
      name: 'name',
      display: 'شناسه'
    }, {
      name: 'weight',
      display: 'شناسه'
    }, {
      name: 'symbol',
      display: 'شناسه'
    }
    ]

  constructor(private matDialog: MatDialog) {
  }

  openModal(modal:any) {
    // const ref = this.matDialog.open(ColumnManagerComponent, {width: '60%'})
      this.matDialog.open(modal, {width: '60%'});

    // ref.backdropClick().subscribe(() => {
    //   console.log(23)
    //   return;
    // })
  }
  getNestedValue(obj: any, column: any, path: string): any {
    const keys = path.split('.')
    let data;
    if (obj[keys[0]] !== null) {
      data = keys.reduce((acc, key) => acc[key], obj);
    }
    return data != null ? data : 'تنظیم نشده'
  }
  removeCol(column:any[]){
    this.columns = column
    this.displayedColumns = []
    this.displayedColumns = this.displayedColumns.concat(this.columns.map(x => x.name));
  }
}
