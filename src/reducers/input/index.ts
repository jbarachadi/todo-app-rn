export const inputReducer = (text: string = "", action: any) => {
    switch (action.type) {
        case "INPUT":
            text = action.text;
            return text;
        default:
            return text;
    }
};
