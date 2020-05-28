import { PersonHistory } from "../persons/person-history.entity";

export function calculateStars(histories: PersonHistory[]): number {
    const stars = histories.reduce<number>((prev, next) => prev + next.stars, 0) / histories.length;
    return parseFloat(stars.toFixed(2)) || 0;
}