import Intro from "./Intro";

export default function NewsIntro({article, dispatch, breakingNews}) {
    const {urlToImage, title} = article;

    return (
        <div className={breakingNews? 'NewsIntro-breakingNews':'NewsIntro-restNews'}>
            <img src={urlToImage} alt={title} />
            <div>
                <Intro article={article} dispatch={dispatch} inFavNews={false} />
            </div>
        </div>
    )
}
