import IntroRatingLike from "./IntroRatingLike"

export default function FavNews ({favArticles, dispatch}) {
    const deletePost = (article) => {
        return ({
            type: 'deletePost',
            payload: article
        })
    }

    return (
        <div className="FavNews">
        <h2>Fav News</h2>
        {
            favArticles.map((article) => {
                return (
                    <div>
                        <IntroRatingLike article={article} dispatch={dispatch} />
                        <span className="deleteFav" onClick={()=>{dispatch(deletePost(article))}}>➖</span>
                    </div>)
            })
        }</div>
    )
}
