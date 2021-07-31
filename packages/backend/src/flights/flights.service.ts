import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Flight } from './entities/flight.entity';

@Injectable()
export class FlightsService {
  constructor(
    @InjectRepository(Flight)
    private readonly flightsRepository: Repository<Flight>,
  ) {}

  findAll(): Promise<Flight[]> {
    return this.flightsRepository.find();
  }

  findOne(id: number): Promise<Flight> {
    return this.flightsRepository.findOne(id);
  }

  query(origin: string, destination: string): Promise<Flight[]> {
    return this.flightsRepository.find({ origin, destination });
  }
}
