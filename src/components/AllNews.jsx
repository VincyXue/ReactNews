import { useState } from 'react';
import NewsIntro from './NewsIntro';

export default function AllNews({ articles, dispatch }) {
    const filteredArticles = articles.filter((article) => article.title !== '[Removed]');
    const [currentPage, setCurrentPage] = useState(0);
    const articlesPerPage = 5;

    const handleNextPage = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % Math.ceil(filteredArticles.length / articlesPerPage));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + Math.ceil(filteredArticles.length / articlesPerPage)) % Math.ceil(filteredArticles.length / articlesPerPage));
    };

    const startIdx = currentPage * articlesPerPage;
    const endIdx = startIdx + articlesPerPage;

    return (
    <div className="AllNews">
        <h2>News</h2>
        {filteredArticles.slice(startIdx, endIdx).map((article, idx) => (
        <NewsIntro key={idx} article={article} dispatch={dispatch} />
        ))}
        <div className="pagination">
            <button onClick={handlePrevPage}>Previous</button>
            <button onClick={handleNextPage}>Next</button>
        </div>
    </div>
    );
}

// //without carousel
// import NewsIntro from './NewsIntro'

// export default function AllNews({articles, dispatch}) {
//     const filteredArticles = articles.filter(article => article.title !== '[Removed]');

//     return (
//         <div className='AllNews'>
//         <h2>News</h2>
//             {filteredArticles.map((article, idx) => {
//                 return <NewsIntro key={idx} article={article} dispatch={dispatch} />
//             })}
//         </div>
//     )
// }
