import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export type MessageDocument =  Message & Document;

@Schema()
export class Message {
    @Prop()
    msg: string;

    @Prop()
    user: CreateUserDto;

    @Prop()
    roomId: string;

    @Prop()
    status: boolean;
}

export const MessageSchema = SchemaFactory.createForClass(Message);