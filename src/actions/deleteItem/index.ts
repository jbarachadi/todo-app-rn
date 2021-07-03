export const deleteItem: any = (id: number) => {
    return {
        type: "DELETE",
        id,
    };
};
