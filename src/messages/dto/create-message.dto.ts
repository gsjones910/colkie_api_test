import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export class CreateMessageDto {
    @ApiProperty()
    msg: string;

    @ApiProperty()
    user: CreateUserDto;

    @ApiProperty()
    roomId: string;

    @ApiProperty()
    status: boolean;

}
