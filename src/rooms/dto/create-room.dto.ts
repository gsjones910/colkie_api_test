import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export class CreateRoomDto { 
    @ApiProperty()
    name: string;

    @ApiProperty()
    icon: string;

    @ApiProperty()
    creator: CreateUserDto;

    @ApiProperty()
    users: CreateUserDto[];

    @ApiProperty()
    status: boolean;

}
