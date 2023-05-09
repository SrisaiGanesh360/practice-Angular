import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter',
})
export class MyfilterPipe implements PipeTransform {
  transform(employees: any[], search: string, field: string) {
    if (!employees) return [];
  	if (!search) return employees;

  	search = search.toLowerCase();
  	return employees.filter(emp => {
  		return emp[field].toLowerCase().includes(search);
  	});
  }
}
