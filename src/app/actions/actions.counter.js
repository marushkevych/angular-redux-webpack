export function increment(step=1){
	return {
		type: 'INCREMENT',
		step
	}
}

export function decrement(step=1){
	return {
		type: 'DECREMENT',
		step
	}
}