import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export type RoomDocument =  Room & Document;

@Schema()
export class Room {
    @Prop()
    name: string;

    @Prop()
    icon: string;

    @Prop()
    creator: CreateUserDto;

    @Prop()
    users: CreateUserDto[];

    @Prop()
    status: boolean;
}

export const RoomSchema = SchemaFactory.createForClass(Room);