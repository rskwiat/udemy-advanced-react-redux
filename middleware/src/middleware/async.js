export default function ({ dispatch }) {
	return next => action => {
		//if action does not have payload
		if (!action.payload || !action.payload.then) {
			return next(action)
		}

		action.payload
			.then(function(response) {
				const newAction = { ...action, payload: response }
				dispatch(newAction);
			});

	}
}