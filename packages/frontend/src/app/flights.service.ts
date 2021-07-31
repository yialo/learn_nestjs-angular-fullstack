import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TFlight } from './flight.model';

const API_ROOT = 'http://localhost:3200';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  constructor(private http: HttpClient) {}

  getFlights(): Observable<any> {
    return this.http.get(`${API_ROOT}/flights/`);
  }

  postFlight(flight: TFlight) {}

  deleteFlight(id: number) {}
}
