export default function NewsDetail({articles, dispatch}){
    const {urlToImage, title, author, publishedAt, content, description, url} = articles;

    const hideDetail = () => {
        return {
            type: 'hideDetail'
        }
    }

    return (
        <div className='NewsDetail'>
            <div>
                <h2>News Detail</h2>
                <img src={urlToImage} alt={title} />
                <div className="NewsDetail-full-details">
                    <h3 className="title" >{title}</h3>
                    <p className="description">{description}</p>
                    <div className="author">{author} </div>
                    <p className="content">{content}</p>
                    <div className="publish-at">{publishedAt}</div>
                    <a href={url}>Read More</a>
                </div>
            </div>
            <span className="hideDetail" onClick={()=>{dispatch(hideDetail())}}>➖</span>
        </div>
    )
}
