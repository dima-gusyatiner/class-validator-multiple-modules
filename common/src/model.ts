import { IsInt } from 'class-validator';

export class Model {
    @IsInt()
    id: number = undefined;
}