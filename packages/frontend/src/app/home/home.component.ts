import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TFlight } from '../flight.model';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cities = [
    'Atlanta',
    'Chicago',
    'Denver',
    'Jackson',
    'London',
    'Los Angeles',
    'New York',
    'Phoenix',
  ];
  flights: TFlight[] = [];

  constructor(private flightsService: FlightsService) {}

  query(form: NgForm) {
    const { origin, destination } = form.value;

    if (origin === destination) {
      return;
    }

    this.flightsService.getFlights(origin, destination).subscribe((data) => {
      this.flights = data;
    });
  }
}
