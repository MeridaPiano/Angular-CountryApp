import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { Observable, of, map } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable( { providedIn: 'root' } )

export class CountriesService {

  private apiURL: string = 'https://restcountries.com/v3.1';

  constructor( private httpClient: HttpClient ) { }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {

    const url = `${this.apiURL}/alpha/${ code }`;

    return this.httpClient
      .get<Country[]>( url )
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null),
        catchError( () => of ( null )
        )
      );

  }

  searchCapital(term: string): Observable<Country[]>{
    const url = `${this.apiURL}/capital/${ term }`;
    return this.httpClient
      .get<Country[]>( url )
      .pipe(
        // tap( countries => console.log('Paso por el tap1: ', countries)),
        // map( countries => [] ),
        // tap( countries => console.log('Paso por el tap2: ', countries)),
        catchError( error => {
          console.log("Error: ", error);

          return of([])
        })
      );

  }

  // Tarea
  searchCountry(term: string): Observable<Country[]>{
    const url = `${this.apiURL}/name/${ term }`;
    return this.httpClient
      .get<Country[]>( url )
      .pipe(
        // tap( countries => console.log('Paso por el tap1: ', countries)),
        // map( countries => [] ),
        // tap( countries => console.log('Paso por el tap2: ', countries)),
        catchError( error => {
          console.log("Error: ", error);

          return of([])
        })
      );
  }

  searchRegion(term: string): Observable<Country[]>{
    // https://restcountries.com/v3.1/region/{region}
    const url = `${this.apiURL}/region/${ term }`;
    return this.httpClient
      .get<Country[]>( url )
      .pipe(
        // tap( countries => console.log('Paso por el tap1: ', countries)),
        // map( countries => [] ),
        // tap( countries => console.log('Paso por el tap2: ', countries)),
        catchError( error => {
          console.log("Error: ", error);

          return of([])
        })
      );
  }

}
