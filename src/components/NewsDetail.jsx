export default function NewsDetail({articles, dispatch}){
    const {urlToImage, title, author, publishedAt, content, description, url} = articles;

    const hideDetail = () => {
        return {
            type: 'hideDetail'
        }
    }

    return (
        <div className='NewsDetail'>
            <>
                <h2>News Detail</h2>
                <img src={urlToImage} alt={title} />
                <div className="NewsDetail-full-details">
                    <h3 className="title" >{title}</h3>
                    <div className="author">Author: {author} </div>
                    <p className="description">Description: {description}</p>
                    <p className="content">Content: {content}</p>
                    <div className="publish-at">Publish At: {publishedAt}</div>
                    <a href={url}>Read More</a>
                </div>
            </>
            <span className="hideDetail" onClick={()=>{dispatch(hideDetail())}}>➖</span>
        </div>
    )
}
