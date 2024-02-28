import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-column-manager',
  templateUrl: './column-manager.component.html',
  styleUrl: './column-manager.component.scss'
})
export class ColumnManagerComponent implements OnInit {
  @Input() set columns(cols: any) {
    this.visible = cols
  }

  visible: any[] = []
  @Input()  disable:any[] = []
  @Output() visibleItems = new EventEmitter
  @Output() hiddenItems = new EventEmitter
  @ViewChild('visibleInput') visibleInput!: ElementRef;
  @ViewChild('disableInput') disableInput!: ElementRef;

  disableItemIndex: number = -1;
  visibleItemIndex: number = -1;

  constructor() {
  }

  ngOnInit(): void {
  }

  updateColumn() {
    this.visibleItems.emit(this.visible)
    this.hiddenItems.emit(this.disable)
  }

  drop(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  toggleEditModeDisable(index: number) {
    this.disableItemIndex = index;
    setTimeout(() => {
      this.disableInput.nativeElement.focus();
    }, 1000);
  }

  toggleEditModeVisible(index: number) {
    this.visibleItemIndex = index;
    setTimeout(() => {
      this.visibleInput.nativeElement.focus();
    });

  }
}
