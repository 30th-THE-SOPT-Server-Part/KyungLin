export interface MovieCreateDto {
    title: string,
    director: string,
    starteDate?: Date;
    thumbnail?: string;
    story?: string;
}