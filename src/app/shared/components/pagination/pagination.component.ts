import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() offset = 0;
  @Input() limit: number;
  @Input() size = 1;
  @Input() range = 3;
  @Input() itemsPerPage: number[] = [5, 10, 15];
  @Output() pageChange: EventEmitter<Map<string, number>> = new EventEmitter<Map<string, number>>();

  pages: Observable<number[]>;
  currentPage: number;
  totalPages: number;
  currentPageSize: number;

  constructor() { }

  ngOnInit() {
    this.getPages();
  }

  ngOnChanges() {
    this.getPages();
  }

  getPages() {
    if (!this.limit) {
      this.limit = this.itemsPerPage[0];
    }

    this.currentPage = this.getCurrentPage(this.offset, this.limit);
    this.totalPages = this.getTotalPages(this.limit, this.size);
    this.pages = Observable.range(-this.range, this.range * 2 + 1)
      .map(offset => this.currentPage + offset)
      .filter(page => this.isValidPageNumber(page, this.totalPages))
      .toArray();

    this.pages.subscribe((pages: number[]) => {
      if (pages.indexOf(this.currentPage) < 0) {
        this.currentPage = pages[pages.length - 1];
      }
    });
  }

  isValidPageNumber(page: number, totalPages: number): boolean {
    return page > 0 && page <= totalPages;
  }

  getCurrentPage(offset: number, limit: number): number {
    return Math.floor(offset / limit) + 1;
  }

  getTotalPages(limit: number, size: number): number {
    return Math.ceil(Math.max(size, 1) / Math.max(limit, 1));
  }

  selectPage(page: number, event) {
    this.cancelEvent(event);
    if (!this.isValidPageNumber(page, this.totalPages)) {
      return;
    }

    const map = new Map<string, number>();
    map.set('offset', ((page - 1) * this.limit));
    map.set('limit', this.limit);
    this.pageChange.emit(map);
  }

  cancelEvent(event) {
    event.preventDefault();
  }

  selectPageSize(pageSize: number, event) {
    this.limit = pageSize;
    this.getPages();
    this.selectPage(this.currentPage, event);
  }
}
