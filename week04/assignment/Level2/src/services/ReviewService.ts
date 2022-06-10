import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { RevieCreateDto } from "../interfaces/review/ReviewCreateDto";
import { ReviewResponseDto } from "../interfaces/review/ReviewResponseDto";
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

const getReviews = async(movieId: string): Promise<ReviewResponseDto[]> => {

    try{
        const reviews = await Review.find({
            movie: movieId
        }).populate('writer', 'name').populate('movie');  //writer의 name만 보도록, 그리고 movie의 정보

        const data: ReviewResponseDto[] = await Promise.all(reviews.map((review: any) => {
            const result = {
                writer: review.writer.name,
                movie: review.movie,
                title: review.title,
                content: review.content
            };

            return result;
        }))

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