import NewsRating from "./NewsRating";

export default function Intro({ article, dispatch, inFavNews}) {
    const { title, author, publishedAt } = article;

    const showDetail = () => {
        return {
            type: 'showDetail',
            currentArticle: article
        }
    }

    return (
        <div className="Intro">
            <h3 className="title" onClick={()=>{dispatch(showDetail())}}>{title}</h3>
            <div className="author">{author} </div>
            <div className="publish-at">{publishedAt}</div>
            {inFavNews? <></>:<NewsRating dispatch={dispatch} article={article} />}
        </div>
    );
}
