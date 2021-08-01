import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TFlight } from '../flight.model';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  flights: TFlight[] = [];
  origins: string[] = [];
  destinations: string[] = [];

  constructor(private readonly flightsService: FlightsService) {}

  ngOnInit() {
    this.flightsService.getAllFlights().subscribe((data: TFlight[]) => {
      this.origins = [...new Set([...data.map((flight) => flight.origin)])];
      this.destinations = [...new Set([...data.map((flight) => flight.destination)])];
    });
  }

  query(form: NgForm) {
    const { origin, destination } = form.value;

    if (origin === destination) {
      return;
    }

    this.flightsService.getFlightsByQuery(origin, destination).subscribe((data) => {
      this.flights = data;
    });
  }

  showAll() {
    this.flightsService.getAllFlights().subscribe((data) => {
      this.flights = data;
    });
  }
}
