import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.css'],
})
export class ProductHeaderComponent {
  @Output() columsCountChange = new EventEmitter<number>();
  sort = 'desc';
  itemsShowCount = 12;

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }
  // itemsShowCount(): void {}''
  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }

  onColumnsUpdated(colsNum: number): void {
    this.columsCountChange.emit(colsNum);
  }
}
