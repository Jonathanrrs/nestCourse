import { IsString, IsUUID, IsOptional } from 'class-validator';

/* data transfer object */
export class UpdateCarDto {
  @IsUUID()
  @IsString()
  @IsOptional()
  /* ? opcional */
  readonly id?: string;

  @IsString()
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @IsOptional()
  // @MinLength(3) /* otro decorador */
  readonly model?: string;
}
