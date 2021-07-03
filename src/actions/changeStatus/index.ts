export const changeStatus: any = (id: number) => {
    return {
        type: "COMPLETED",
        id,
    };
};
