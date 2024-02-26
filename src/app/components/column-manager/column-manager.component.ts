import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-column-manager',
  templateUrl: './column-manager.component.html',
  styleUrl: './column-manager.component.scss'
})
export class ColumnManagerComponent implements OnInit {
  @Input() column: any[] = [
    {id: 1, name: 'Item 1', selected: false},
    {id: 2, name: 'Item 2', selected: false},
    {id: 3, name: 'Item 3', selected: false}
  ]
  @Input() hidden: any[] = [
    {id: 1, name: 'Item 1', selected: false},
    {id: 2, name: 'Item 2', selected: false},
    {id: 3, name: 'Item 3', selected: false}
  ]
  @Output() visibleItems = new EventEmitter
  @Output() hiddenItems = new EventEmitter
  @ViewChild('editInput') editInput!: ElementRef;
  todo = [
    {id: 1, name: 'Item 1', selected: false},
    {id: 2, name: 'Item 2', selected: false},
    {id: 3, name: 'Item 3', selected: false}
  ]
  done = [
    {id: 1, name: 'Item 1', selected: false},
    {id: 2, name: 'Item 2', selected: false},
    {id: 3, name: 'Item 3', selected: false}
  ]
  editingItemIndex: number = -1;
  constructor() {
  }

  ngOnInit(): void {
  }

  updateColumn() {

  }

  drop(event: CdkDragDrop<string[]>) {
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
  toggleEditMode(index: number) {
    this.editingItemIndex = index;
    setTimeout(() => {
      this.editInput.nativeElement.focus();
    });
  }
  test() {
    console.log(this.hidden)
  }
}
