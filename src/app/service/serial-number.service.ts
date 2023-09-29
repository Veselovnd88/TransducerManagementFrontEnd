import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const SERIAL_NUMBER_API = "http://localhost:8083/api/v1/serials";

@Injectable({
  providedIn: 'root'
})
export class SerialNumberService {

  constructor(private http: HttpClient) {


  }

  public getLastAddedSerials(): Observable<any> {
    return this.http.get(SERIAL_NUMBER_API + "/all/dates");
  }
}
