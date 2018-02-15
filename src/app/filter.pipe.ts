import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], currentSearchTerm: string): any[] {
    if (!items) { return []; }
    if (!currentSearchTerm) { return items; }

    currentSearchTerm = currentSearchTerm.toLowerCase();

    return items.filter( it => {
      return it.title.toLowerCase().includes(currentSearchTerm);
    });
  }
}
