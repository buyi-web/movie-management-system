import 'reflect-metadata'
import { MovieModel } from "./db";
import { Movie } from './entities/Movie';
import { MovieService } from './services/MovieService';

const m: any = {
    name: 'xxx',
    types: ['科幻'],
    duration: 6000,
    areas: ['成都'],
}

MovieService.addMovie(m).then(res => {
    console.log(res);
})

