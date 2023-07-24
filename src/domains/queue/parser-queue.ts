import Queue from 'bull';
import { Config } from '../config';

type ParserJobType = {
    city: string,
    pageNumber: number
}

export const parserQueue = new Queue<ParserJobType>('parser-queue', {redis: Config.redis})