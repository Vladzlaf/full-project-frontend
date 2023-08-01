import { UUIDDto } from 'types/uuid-dto.type';

export interface charactersDto extends UUIDDto {
    name: string;
    species: string;
    gender: string;
}