import AllNews from '../components/AllNews';
import FavNews from '../components/FavNews';
import NewsDetail from '../components/NewsDetail';
import { useReducer} from 'react';
import './Body.css'

export default function Body({articles}) {
    //useReducer to make connection between AllNews and FavNews component
    const initialState = {
        favNewsArr: [],
        showDetail: false,
        currentArticle: null
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'addPost':
                return {
                    ...state,
                    favNewsArr: !state.favNewsArr.includes(action.payload) ? [...state.favNewsArr, action.payload] : state.favNewsArr,
                };
            case 'deletePost':
                return {
                    ...state,
                    favNewsArr: state.favNewsArr.filter(article => article !== action.payload)
                }
            case 'showDetail':
                return {
                    ...state,
                    showDetail: true,
                    currentArticle: action.currentArticle
                }
            case 'hideDetail':
                return {
                    ...state,
                    showDetail: false
                }
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="Body">
            <AllNews articles={articles} dispatch={dispatch} />
            {state.showDetail ? (
                    <NewsDetail articles={state.currentArticle} dispatch={dispatch}/>
                ):(
                <FavNews favArticles={state.favNewsArr} dispatch={dispatch} />
                )
            }
        </div>
    );
}
