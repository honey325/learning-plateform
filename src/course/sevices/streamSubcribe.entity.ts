import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { stringNumObjectDto } from 'src/user/dto/usercreate.dto';
import { Repository } from 'typeorm';
import { streamSubDto } from '../dto/streamSubscribe.dto';

@Injectable()
export class stremSubService {
  constructor(
    @InjectRepository(stremSubService)
    private streamRepository: Repository<streamSubDto>,
  ) {}

  findAll(condition: stringNumObjectDto) {
    return this.streamRepository.find({ where: condition });
  }
}
