import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TFlight } from '../flight.model';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  constructor(private readonly flightsService: FlightsService) {}

  sendFlight(form: NgForm) {
    const {
      value: { origin, destination, flight_number, depart, arrive, nonstop },
    } = form;

    // const flight: TFlight = {
    //   origin,
    //   destination,
    //   flight_number,
    //   depart,
    //   arrive,
    //   nonstop,
    // };

    const flight: TFlight = {
      origin: 'Atlanta',
      destination: 'Chicago',
      flight_number: 300,
      depart: '2020-08-10 16:00:00.00Z',
      arrive: '2020-08-10 17:30:00.00Z',
      nonstop: true,
    };

    console.log('send flight:', flight);

    this.flightsService.postFlight(flight);
  }
}
