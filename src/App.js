// import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap
import Header from "./mainCom/Header";
import Body from "./mainCom/Body";
import Footer from "./mainCom/Footer";
import { useEffect, useState } from 'react';
import './App.css';

//App
function App() {
  //fetch news
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState({search: false, input: null});

  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = null;
        if (query.search) {
          url = `https://newsapi.org/v2/top-headlines?q=${query.input}&apiKey=${apiKey}`;
        } else {
          url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('There was an error', error);
      }
    };

    fetchData();
  }, [category, query.input]);

  console.log('category', category) ///
  console.log('articles', articles) ///


  return (
    <div className="App">
      <Header setCategory={setCategory} setQuery={setQuery}/>
      <Body articles={articles} />
      <Footer />
    </div>
  );
}

export default App;
