import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: any): any {
    return value.filter(function(value){
      let mr = 'Mr';
      let mrs = 'Mrs';
      if (value.empGender === "Male") {
        return value.empName =  mr.concat('. '+value.empName);
      } else {
        return value.empName =  mrs.concat('. '+value.empName);
      }
    });
  }

}
