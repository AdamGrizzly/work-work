const initialState = {
	user: 'Adam', number: '+996507550111', name: 'someName'
}
function userInfo (state = initialState, action){
	switch(action.type){
		case "SET_NAME":
			return{...state, name: action.payload}
		default:
			return state
	}
}
export default userInfo