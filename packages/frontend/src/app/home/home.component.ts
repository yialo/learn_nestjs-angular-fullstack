import { Component, OnInit } from '@angular/core';

import { TFlight } from '../flight.model';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  flights: TFlight[] = [];

  constructor(private flightsService: FlightsService) {}

  ngOnInit(): void {
    this.flightsService.getFlights().subscribe((data) => {
      this.flights = data;
    });
  }

  getFlights() {
    return this.flightsService.getFlights();
  }
}
