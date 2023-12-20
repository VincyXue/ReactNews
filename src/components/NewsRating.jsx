import { useState } from "react"

export default function NewsRating({article, dispatch}) {
    //control likes counting
    const [like, setLikes] = useState(0);
    const handleLikes = () => {
        setLikes(like + 1);
    }

    //actions:
    const addPost = () => {
        console.log('testing', article)
        return ({
            type: 'addPost',
            payload: article
        })
    }

    return (
        <div className="NewsRating">
            <div className="like">
                <span class="bi bi-heart" onClick={handleLikes}>❤️</span>
                <p>Likes: {like} </p>
            </div>
            <span className="fav" onClick={()=>{dispatch(addPost())}}>➕</span>
        </div>
    )
}
