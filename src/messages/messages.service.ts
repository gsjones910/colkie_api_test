import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message, MessageDocument } from './schemas/message.schema';

@Injectable()
export class MessagesService {

  constructor(@InjectModel(Message.name) private readonly model: Model<MessageDocument>) { }

  async create(createMessageDto: CreateMessageDto): Promise<Message> {
    return await new this.model({
      ...createMessageDto,
    }).save();
  }

  async findAll(roomId: string): Promise<Message[]> {
    return await this.model.find({ roomId: roomId }).exec();
  }

  async findOne(roomId: string): Promise<Message> {
    return await this.model.findOne({ roomId: roomId }).exec();
  }

  async update(id: string, updateMessageDto: any): Promise<Message> {
    return await this.model.findByIdAndUpdate(id, updateMessageDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Message> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
