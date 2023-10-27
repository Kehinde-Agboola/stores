import { Component } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.css'],
})
export class ProductHeaderComponent {
  sort = 'desc';

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }
}
