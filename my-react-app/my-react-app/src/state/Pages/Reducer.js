const reducer = {state = 0, action} => {
    switch (action.type) {
        case "purchase":
            return state - action.payload;
        case "lay-bye":
            return state +   action.payload;
    }
}