const { createAsyncThunk } = require('@reduxjs/toolkit');
const axios = require('axios');

// 1. create an initial state
/*  the initial state here represents the request cycles i.e. request, response and error, 
    which in turn represents the promise states i.e. pending, fulfilled & rejected
*/
const initialState = {
	posts: [], // emmulates fulfilled state, containing all posts
	loading: false, // emulates pending state, indicating that the data fetch in progress
	error: null, // emulates the rejected or error state, indicating some error in data fetch
};

// 2. Create async thunk

/**
 * @desc createAsyncThunk() - Handles async request lifecycles
 * accepts a Redux action type string and a callback function(payload creator callback) that should return a promise
 * generates action types that resembles the promise lifcycle(pending, fulfilled, rejected)
 * these action types are prefixed with an action type string
 *
 * createAsyncThunk() returns a standard Redux thunk action creator.
 */

const fetchPosts = createAsyncThunk('posts/fetch', async () => {
	const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
	return data;
});
