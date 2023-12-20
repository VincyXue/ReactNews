import { useEffect, useReducer, useState } from "react";
import './Form.css';

export default function Form (prop) {
    const {newsTopic, display, setDisplay} = prop;

    //set up
    const reducer = (state, action) => {
        const newState = {
            ...state,
            ...action
        }
        return newState
    }

    const initialArg = {
        email: '',
        firstName: '',
        lastName: '',
        selectedTopic: '',
        advice: ''
    }

    const [state, dispatch] = useReducer(reducer, initialArg);

    const reSetForm = () => {
        dispatch({
            ...initialArg
        });
        setDisplay('none');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const subscrible = {
            ...state
        }

        reSetForm();
        console.log('subscrible', subscrible);
    }

    //Error Message
    const [errors, setErrors] = useState(initialArg);
    const handleError = () => {
        const newErrors = {...errors};
        //Email
        if (!state.email.includes('@')) {
            newErrors.email = 'Contact must be an Email.';
        }
        else {
            newErrors.email = '';
        }

        //First Name
        if (state.firstName.length < 2) {
            newErrors.firstName = 'First Name must be at least 2 characters.';
        }
        else {
            newErrors.firstName = '';
        }

        //Last Name
        if (state.lastName.length < 2) {
            newErrors.lastName =  'Last Name must be at least 2 characters.';
        }
        else {
            newErrors.lastName = '';
        }

        //Selected Topic
        if (state.selectedTopic === '') {
            newErrors.selectedTopic = 'Please select a topic.';
        }
        else {
            newErrors.selectedTopic = ''
        }

        setErrors(newErrors);
    }

    useEffect (()=>{handleError()}, [errors]);

    //set up action for onChange
    const action = (e) => {
        const objKey = e.target.name;
        dispatch({[objKey]: e.target.value});
    }

    return(
        <div className="floating-box" style={{display: `${display}`}}>
            <div className='subscrible-title'>
                <h1>Subscrible</h1>
                <span className="close-button" onClick={reSetForm}>X</span>
            </div>

            <form className='form' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email Address: </label>
                <input type='text' name='email' placeholder='Email Address' value={state.email} onChange={action} />
                {errors.email ? <p className="errorMsg">{errors.email}</p> : <></>}

                <label htmlFor='firstName'>First Name:</label>
                <input type='text' name='firstName' placeholder='First Name' value={state.firstName} onChange={action}/>
                {errors.firstName ? <p className="errorMsg">{errors.firstName}</p> : <></>}

                <label htmlFor='lastName'>Last Name:</label>
                <input type='text' name='lastName' placeholder='Last Name' value={state.lastName} onChange={action}/>
                {errors.lastName ? <p className="errorMsg">{errors.lastName}</p> : <></>}

                <label>Select your Topic: </label>
                <select value={state.selectedTopic} name='selectedTopic' onChange={action}>
                    <option value={''}>Select a Topic</option>
                    {newsTopic.map(topic => {
                        return (
                            <option key={topic}>{topic}</option>
                        )
                    })}
                </select>
                {errors.selectedTopic ? <p className="errorMsg">{errors.selectedTopic}</p> : <></>}

                <label htmlFor='advice'>Advice: </label>
                <textarea className='text-area' placeholder='please let us know your advice...' name='advice' value={state.advice} onChange={action}/>

                <button type="submit" className='btn'>Subscrible</button>
            </form>
        </div>
    )
}
