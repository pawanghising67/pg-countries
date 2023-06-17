import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {


  //on insitialization it will know that there is ahttpClient that will be coming
  constructor(private _httpClient:HttpClient) { }

  //RESTFUL call
  public getCountries():any{
    return this
    ._httpClient
    .get(
      'https://restcountries.com/v3.1/all');
  }
}
