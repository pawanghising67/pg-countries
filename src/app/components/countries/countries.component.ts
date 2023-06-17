import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  
  public data:any;

  getCurrencies(array:any){
    array.forEach((element:any) => {
      if(array.hasOwnProperty(element)){
        const currency = array[element];
        const currencyName = currency.name;
        console.log(currencyName);
        return currencyName;
      }
    });
    
  }
  //angular js will inject the service in runtime
  constructor(private _service:CountriesService) { }
  ngOnInit(): void {
    this._service.getCountries().subscribe((response:any)=>{
      this.data = response;

    }),
    (error:any)=>{
      console.error(error)
    }
  }
}
