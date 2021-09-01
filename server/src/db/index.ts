import { connect } from 'mongoose';
import MovieModel from './MovieSchema';

connect('mongodb://localhost:27017/moviedb').then(() => console.log('连接数据库成功'))

export { MovieModel }
