import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRoomDto } from './dto/create-room.dto';
import { Room, RoomDocument } from './schemas/room.schema';

@Injectable()
export class RoomsService {

  constructor(@InjectModel(Room.name) private readonly model: Model<RoomDocument>) { }

  async create(createRoomDto: CreateRoomDto): Promise<Room> {
    return await new this.model({
      ...createRoomDto,
    }).save();
  }

  async findAll(): Promise<Room[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Room> {
    return await this.model.findById(id).exec();
  }

  async addUser(id: string, userDto: any): Promise<Room> {
    let roomInfo = await this.model.findById(id).exec()
    roomInfo.users.push(userDto);
    return await this.model.findByIdAndUpdate(id, roomInfo, { new: true }).exec();
  }

  async update(id: string, updateRoomDto: any): Promise<Room> {
    return await this.model.findByIdAndUpdate(id, updateRoomDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Room> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
