import './Header.css';
import { useState } from 'react';

export default function Header ({setCategory, setQuery}) {
    const [searchInput, setSearchInput] = useState('');

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
        <header className="header">
            <h1 onClick={()=>{setCategory('general')}}>Vincy News</h1>
            <div className="search-signup">
                <span>Subscrible</span>
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
            <div className="searchTopics">
                <span onClick={()=>
                    {setCategory('business');
                    setQuery({search: false, input: null})
                    }}
                >Business</span>
                <span onClick={()=>
                    {setCategory('entertainment');
                    setQuery({search: false, input: null})
                    }}
                >Entertainment</span>
                <span onClick={()=>
                    {setCategory('health');
                    setQuery({search: false, input: null})
                    }}
                >Health</span>
                <span onClick={()=>
                    {setCategory('science');
                    setQuery({search: false, input: null})
                    }}
                >Science</span>
                <span onClick={()=>
                    {setCategory('technology');
                    setQuery({search: false, input: null})
                    }}
                >Technology</span>
                <span onClick={()=>
                    {setCategory('sport');
                    setQuery({search: false, input: null})
                    }}
                >Sports</span>
            </div>
        </header>
    )
}
