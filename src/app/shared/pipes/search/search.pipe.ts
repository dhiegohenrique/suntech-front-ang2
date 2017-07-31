import { Pipe, PipeTransform } from '@angular/core';

import * as normalize from 'normalize-for-search';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  private contains: boolean;

  transform(items: any[], fields: string[], value: string, contains?: boolean): any[] {
    if (!items) {
      return [];
    }

    if (contains) {
      this.contains = true;
    }

    if (!value) {
      value = '';
    }

    value = this.getNormalize(value);
    return this.filter(items, fields, value);
  }

  filter(items: any[], fields: string[], value: string) {
    return items.filter((item) => {
      return this.filterByFields(item, fields, value);
    });
  }

  filterByFields(item: any, fields: string[], value: string) {
    return fields.find((field) => {
      const valueField: string = this.getNormalize(item[field]);
      if (this.contains) {
        return (valueField.indexOf(value) > -1);
      }
      return valueField.startsWith(value);
    });
  }

  getNormalize(value: string) {
    return normalize(value).toLowerCase();
  }
}
