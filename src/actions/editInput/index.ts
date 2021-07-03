export const editInput: any = (id: number, text: string) => {
    return {
        type: "EDIT_INPUT",
        id,
        text
    };
};
