import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { RevieCreateDto } from "../interfaces/review/ReviewCreateDto";
import { ReviewInfo } from "../interfaces/review/ReviewInfo";
import { ReviewResponseDto } from "../interfaces/review/ReviewResponseDto";
import { reviewesResponseDto } from "../interfaces/review/ReviewsResponseDto";
import Review from "../models/Review";

const createReview = async(movieId: string, reviewCreateDto: RevieCreateDto): Promise<PostBaseResponseDto> => {
    try {

        const review = new Review({
            title: reviewCreateDto.title,
            content: reviewCreateDto.content,
            writer: reviewCreateDto.writer,
            movie: movieId
        });

        await review.save()

        const data = {
            _id: review._id
        }
        return data;
    } catch(error) {
        console.log(error);
        throw error;
    }
};

const getReviews = async(search: string, page: number): Promise<reviewesResponseDto> => {
    const regex = (pattern: string) => new RegExp(`.*${pattern}.*`);
    let reviews: ReviewInfo[] = [];
    const perPage: number = 2;

    try{
        const titleRegex = regex(search);
        const reviews = await Review.find({
            title: { $regex: titleRegex}
        }).populate('writer', 'name').populate('movie')
            .sort({ createdAt: -1 })
            .skip(perPage * (page - 1))
            .limit(perPage);  //writer의 name만 보도록, 그리고 movie의 정보


        const total: number = await Review.countDocuments({});
        const lastPage: number = Math.ceil(total / perPage);

        const movies: ReviewResponseDto[] = await Promise.all(reviews.map((review: any) => {
            const result = {
                writer: review.writer.name,
                movie: review.movie,
                title: review.title,
                content: review.content
            };

            return result;
        }))
        
        const data :MoviesResponseDto = {
            movies: movies,
            lasPage: lastPage
        }

        return data;

    } catch(error) {
        console.log(error);
        throw error;
    }
}

export default {
    createReview,
    getReviews
}
