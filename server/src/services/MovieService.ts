import { Movie } from "../entities/Movie";
import { IMovie } from '../db/MovieSchema'
import { MovieModel } from "../db";

export class MovieService {
    static async addMovie(movie: Movie): Promise<IMovie | string[]> {
        // 类型转换
        movie =  Movie.transform(movie)
        // 数据验证
        const errors = await movie.validateThis();
        if(errors.length > 0) {
            return errors
        }
        // 添加到数据库
        const res = await MovieModel.create(movie)

        return res
    }
}