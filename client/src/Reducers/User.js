const UserReducer = (state , action ) => {
    switch (action.type) {
        case "LOGIN":
        case "USER_INFO":
            return{
                isAuth:true,
                info:action.payload
            }
        default:
            return state;
    }
}

export default UserReducer;