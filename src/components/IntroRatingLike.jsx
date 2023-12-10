export default function IntroRatingLike({ article, dispatch}) {
    const { title, author, publishedAt } = article;

    const showDetail = () => {
        return {
            type: 'showDetail',
            currentArticle: article
        }
    }

    return (
        <div className="IntroRatingLike">
            <h3 className="title" onClick={()=>{dispatch(showDetail())}}>{title}</h3>
            <div className="author">{author} </div>
            <div className="publish-at">{publishedAt} </div>
        </div>
    );
}
