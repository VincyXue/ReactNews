import './Header.css';
import { useState } from 'react';
import Form from '../components/Form';

export default function Header ({setCategory, setQuery}) {
    const [searchInput, setSearchInput] = useState('');
    const [display, setDisplay] = useState('none');
    const newsTopic = ['business', 'entertainment', 'health', 'science', 'technology', 'sports'];


    const handleKeyDown = (e) => {
        if (e.key === 'Enter'){
            returnQuery(e);
        }
    }

    const returnQuery = (e) => {
        e.preventDefault();
        if (searchInput.trim() === '') {
          setQuery({ search: false, input: null });
        } else {
          setQuery({ search: true, input: searchInput });
        }
    };

    return (
        <header className="Header">
            <div className='Header-h1-signup-search'>
                <h1 onClick={()=>{setCategory('general')}}>Vincy News</h1>
                    <div className="search-signup">
                        <span onClick={()=>{setDisplay('block')}} >Subscrible</span>
                        <Form newsTopic={newsTopic} display={display} setDisplay={setDisplay} />
                        <form className="searchBar">
                            <input
                                placeholder="Search..."
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            <span type="submit" onClick={returnQuery}> 🔍</span>
                        </form>
                    </div>
            </div>
                <div className="Header-Nabbar">
                    {newsTopic.map(topic => {
                        return (
                            <span onClick={()=>
                                {setCategory(topic);
                                setQuery({search: false, input: null})
                                }}
                            >{topic}</span>
                        )}
                    )}
                </div>
        </header>
    )
}
