import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAIL = 'POST_FAIL';


export const fetchSmurfs = () => {
    return(dispatch => {
        dispatch({type: FETCH_START});
        axios.get('http://localhost:3333/smurfs')
            .then(resp => 
                dispatch({type: FETCH_SUCCESS, payload: resp.data})
            )
            .catch(err => 
                dispatch({type: FETCH_FAIL, payload: err}))
    });
}

export const addSmurf = (newSmurf) => {
    return({type: POST_SUCCESS, payload: newSmurf});
}

export const setError = (error) => {
    return({type: POST_FAIL, payload: error});
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.