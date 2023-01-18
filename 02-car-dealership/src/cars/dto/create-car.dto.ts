import { IsString } from 'class-validator';

/* data transfer object */
export class CreateCarDto {
  @IsString()
  readonly brand: string;

  @IsString()
  // @MinLength(3) /* otro decorador */
  readonly model: string;
}
