import { charactersDto } from './character-dto.type';

export interface charactersState  {
  data: charactersDto[],
  isSuccess: boolean,
  errors: string,
  pending: boolean,
}