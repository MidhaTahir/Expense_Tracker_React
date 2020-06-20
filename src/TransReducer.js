const TransReducer = ((state,action) => {
    switch(action.type){
        case "PLUS":
            return [action.payload, ...state]
        case "MINUS":
            return state.filter(
                (transaction) => transaction.id !== action.payload
              )
        default:
            return state;
    }
})

export default TransReducer;
