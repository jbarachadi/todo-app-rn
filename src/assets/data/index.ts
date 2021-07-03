export interface todo {
    id: number;
    text: string;
    status: boolean;
}

export var todos: Array<todo> = [
    {
        id: 0,
        text: "buy groceries",
        status: true,
    },
    {
        id: 1,
        text: "take out trash",
        status: true,
    },
    {
        id: 2,
        text: "go to doctor",
        status: false,
    },
    {
        id: 3,
        text: "open bank account",
        status: false,
    },
    {
        id: 4,
        text: "return book",
        status: true,
    },
];
