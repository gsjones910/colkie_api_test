import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Put } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Messages')
@Controller('api/messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  async create(@Body() createMessageDto: CreateMessageDto) {
    return await this.messagesService.create(createMessageDto);
  }  

  @Get(':roomid')  
  async findAll(@Param('roomid') roomid: string) { 
    return await this.messagesService.findAll(roomid);
  }
  
  @Get(':roomid/lastMessage')
  async findOne(@Param('roomid') roomid: string) {
    return await this.messagesService.findOne(roomid);
  }
 
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMessageDto: CreateMessageDto) {
    return await this.messagesService.update(id, updateMessageDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.messagesService.remove(id);
  }
  
}
