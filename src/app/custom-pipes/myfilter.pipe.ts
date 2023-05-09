import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter',
})
export class MyfilterPipe implements PipeTransform {
  transform(employees: any[], search: string) {
    if (!employees) return [];
  	if (!search) return employees;

  	search = search.toLowerCase();
  	return employees.filter(emp => {
  		return emp.name.toLowerCase().includes(search);
  	});
  }
}
