import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cmlCase'
})
export class CmlCasePipe implements PipeTransform {

  transform(val: string): string {
    let stringArr = val.split(" ");
    let rmspString="";
    let count = 0;
    for (const iterator of stringArr) {
      if(count==0){
        rmspString = rmspString.concat(iterator.toLowerCase());
      }else{
       rmspString =  rmspString.concat(iterator.charAt(0).toUpperCase());
       rmspString =  rmspString.concat(iterator.slice(1));
      }
      count++;
      // rmspString = rmspString.concat("Suhasss");
    }
    
    return rmspString.toString();
  }

}
