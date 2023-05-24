/**
 * Steps for setting up redux in an application:
 *
 * 1. Create an initial state
 * 2. Create an action creator - including action types and action
 * 3. Create reducer(s)
 * 4. Configure the store
 */

const { createAction, nanoid, createReducer } = require('@reduxjs/toolkit');

/// Using redux tool kit

// 1. create initial state
const initialState = { counter: 0 };

// 2. create action
/**
 * @desc createAction() - combines creation of action type and an action
 * when using createAction the action type parameter is required
 */
const increment = createAction('INCREMENT');
const decrement = createAction('DECREMENT');
const reset = createAction('RESET');

/*  customize action to accept parameters - 
    a callback function needs to be specified that returns an payload object 
 */
const incrementBy = createAction('INCREMENT_BY', (amount, user) => {
	return {
		payload: {
			// payload is a required property
			amount,
			user,
			id: nanoid(),
		},
	};
});

console.log(increment);
// pass payload to action
console.log(increment(200));
// use of customized action
console.log(incrementBy(120, 'Elee'));

/**
 * @desc Reducer definition
 * Reducer: A reducer is a function that accepts the current state and an action
 * and decides how to update the state based on the action
 * and returns a new state
 *
 * createReducer() - Enables us to create redux reducer functions
 * allows us to mutate the state directly, since it uses imer internally
 * In Rtk, there are 2 ways of creating reducer:
 *  1. builder callback
 *  2. map object notation
 */

// 3. Create reducer - using builder callback notation
createReducer(initialState, (builder) => {
	builder.addCase(increment, (state) => {
		state.counter += 1;
	});

	builder.addCase(incrementBy, (state, action) => {
		state.counter += action.payload.amount;
	});

	builder.addCase(decrement, (state) => {
		state.counter -= 1;
	});

	builder.addCase(reset, (state) => {
		state.counter = 0;
	});
});
