import NewsRating from "./NewsRating";
import IntroRatingLike from "./IntroRatingLike";

export default function NewsIntro({article, dispatch}) {
    const {urlToImage, title, author, publishedAt} = article;

    return (
        <div className='NewsIntro'>
            <img src={urlToImage} alt={title} />
            <div className="NewsIntro-ul-rating-like">
            <IntroRatingLike article={article} title={title} author={author} publishedAt={publishedAt} dispatch={dispatch}/>
                <NewsRating dispatch={dispatch} article={article} />
            </div>
        </div>
    )
}
