export function counter (state = 0, action){

  switch (action.type) {
    case 'INCREMENT':
      return state + action.step;

    case 'DECREMENT':
      return state - action.step;

  }

	return state
}