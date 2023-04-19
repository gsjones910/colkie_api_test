import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Put } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Rooms')
@Controller('api/rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post()
  async create(@Body() createRoomDto: CreateRoomDto) {
    return await this.roomsService.create(createRoomDto);
  }  

  @Get()  
  async findAll(@Request() req) { 
    return await this.roomsService.findAll();
  }
  
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.roomsService.findOne(id);
  }
  
  @Patch(':id/addUser')
  async addUser(@Param('id') id: string, @Body() createUserDto: CreateUserDto) {
    return await this.roomsService.addUser(id, createUserDto);
  }  
 
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateRoomDto: CreateRoomDto) {
    return await this.roomsService.update(id, updateRoomDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.roomsService.remove(id);
  }
  
}
