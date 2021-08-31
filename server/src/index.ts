import 'reflect-metadata'
import { Movie } from "./entities/Movie";
import { validate } from "class-validator";
import { plainToClass } from 'class-transformer'

const m: any = {};
m.name = 333
m.duration = 6000
m.areas = ['成都', '上海']
m.types = ['科幻']

const movie = plainToClass(Movie, m)
console.log(movie);

validate(movie).then(res => {
    console.log(res);
    
})

