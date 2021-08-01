import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TFlight } from '../flight.model';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private readonly flightsService: FlightsService) {}

  flights: TFlight[] = [];

  ngOnInit() {
    this.flightsService.getAllFlights().subscribe((flights) => {
      this.flights = flights;
    });
  }

  sendFlight(form: NgForm) {
    const {
      value: { origin, destination, flight_number, depart, arrive, nonstop },
    } = form;

    const flight: TFlight = {
      origin,
      destination,
      flight_number,
      depart,
      arrive,
      nonstop,
    };

    console.log('send flight:', flight);

    this.flightsService.postFlight(flight);
  }
}
