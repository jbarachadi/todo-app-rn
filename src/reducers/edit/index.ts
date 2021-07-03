interface IEditButton {
    id: number;
    status: boolean;
}

let initialState: IEditButton = { id: -1, status: false };

export const editReducer = (edit: IEditButton = initialState, action: any) => {
    switch (action.type) {
        case "EDIT":
            edit = { id: action.id, status: !edit.status };
            return edit;
        default:
            return edit;
    }
};
