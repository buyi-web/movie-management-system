import { Schema, model, Document } from 'mongoose';
import { Movie } from '../entities/Movie';

export interface IMovie extends Movie, Document{}

const movieSchema = new Schema<IMovie>({
    name: { type: String, required: true },
    types: { type: [String], required: true},
    areas: { type: [String], required: true},
    duration: { type: Number, required: true},
    isHot: { type: Boolean, required: true},
    isClassic: { type: Boolean, required: true},
    isComing: { type: Boolean, required: true},
    synopsis: { type: String, required: false},
    poster: { type: String, required: false}
}, {
    versionKey: false
});

export default model<IMovie>("Movie", movieSchema)