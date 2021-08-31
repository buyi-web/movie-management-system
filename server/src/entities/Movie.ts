import { Type } from 'class-transformer';
import {ArrayMinSize, IsArray, IsInt, IsNotEmpty} from 'class-validator'

export class Movie {
    @IsNotEmpty({message: '电影名称不可以为空'})
    @Type(() => String)
    name: string;

    @IsNotEmpty({message: '电影类型不可以为空'})
    @ArrayMinSize(1, {message: '电影类型至少一个'})
    @IsArray({message: '电影类型必须是一个数组'})
    @Type(() => String)
    types: string[];

    @IsNotEmpty({message: '上映地区不可以为空'})
    @ArrayMinSize(1, {message: '上映地区至少一个'})
    @IsArray({message: '上映地区必须是一个数组'})
    @Type(() => String)
    areas: string[];

    @IsNotEmpty({message: '电影时长不可以为空'})
    @IsInt({message: '电影时长必须是整数'})
    @Type(() => Number)
    duration: number;

    @Type(() => Boolean)
    isHot: boolean = false;

    @Type(() => Boolean)
    isClassic: boolean = false;

    @Type(() => Boolean)
    isComing: boolean = false;

    @Type(() => String)
    synopsis?: string;

    @Type(() => String)
    poster?: string;

}