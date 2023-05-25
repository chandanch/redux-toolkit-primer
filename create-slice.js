const { createSlice, configureStore } = require('@reduxjs/toolkit');

// 1. create an initial state
const initialState = {
	counter: 0,
};

/**
 * @desc createSlice() - combines createAction and createReducer
 * createSlice() simplifies the creation of action and reducer
 * each of the slice reducer owns the state independently
 * Note: createSlice() is the recommended approach for creating action and reducer rather than
 * using the createAction() and createReducer()
 *
 *
 * createSlice Arguments:
 * createSlice() accepts a single object and must contain the following properties:
 *  1. name - must be unique and is used in action types since the generated action types use this prefix,
 *     it also represents a reducer in the state
 *  2. initialState - initial state value for this slice of state.
 *  3. reducers - must be an object and contains the action name(in the key) and its
 *     corresponding reducer function ( in the value)
 *     The keys in the object will be used to generate string action type constants,
 *     and these will show up in the Redux DevTools Extension when they are dispatched
 */

// 2. create a slice
const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => {
			state.counter += 1;
		},
		decrement: (state) => {
			state.counter -= 1;
		},
		incrementBy: (state, action) => {
			state.counter += action.payload.amount;
		},
	},
});

// 3. generate actions
const { increment, incrementBy, decrement } = counterSlice.actions;

// 4. generate reducer
const counterReducer = counterSlice.reducer;

// 5. configure redux store
const store = configureStore({
	reducer: counterReducer,
});

// dispatch action
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(incrementBy({ amount: 30 }));

// get current state from store
console.log(store.getState());
