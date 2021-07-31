import { Controller, Get, Param } from '@nestjs/common';

import { Flight } from './entities/flight.entity';
import { FlightsService } from './flights.service';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Get()
  findAll(): Promise<Flight[]> {
    return this.flightsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Flight> {
    return this.flightsService.findOne(+id);
  }
}
