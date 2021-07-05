import { todo } from "assets";

export const initAdd: any = (items: todo[]) => {
    return {
        type: "INIT_ADD",
        items
    };
};
