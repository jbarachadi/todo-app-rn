var initialState: boolean = false;

export const refreshReducer = (refresh: boolean = initialState, action: any) => {
    switch (action.type) {
        case "REFRESH":
            return !refresh;
        default:
            return refresh;
    }
};
