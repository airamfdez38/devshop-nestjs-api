import { UpdateUserDto } from "src/users/dto/update-user.dto";

export interface IPayload {
    user: UpdateUserDto;
    expiration?: string;
}