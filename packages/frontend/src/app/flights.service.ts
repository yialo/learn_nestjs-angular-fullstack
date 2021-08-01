import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TFlight } from './flight.model';

const API_ROOT = 'http://localhost:3200';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  constructor(private readonly http: HttpClient) {}

  getFlightsByQuery(origin: string, destination: string): Observable<any> {
    return this.http.get(`${API_ROOT}/flights/query/${origin}/${destination}`);
  }

  getAllFlights(): Observable<any> {
    return this.http.get(`${API_ROOT}/flights/`);
  }

  postFlight(flight: TFlight) {
    this.http.post(`${API_ROOT}/flights/`, flight).subscribe((data) => {
      console.log(`Data posted to server: ${data}`);
    });
  }

  deleteFlight(id: number) {}

  getAllOrigins(): Observable<any> {
    return this.http.get(`${API_ROOT}/flights/cities/origins`);
  }

  getAllDestinations(): Observable<any> {
    return this.http.get(`${API_ROOT}/flights/cities/destinations`);
  }
}
