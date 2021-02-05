export const reducer = (action, state) => {
    if (action.type === "ADD_MOVIE") {
        return {
            ...state,
            isModalOpen: true,
            modalContent: "Movie Title added",
        };
    }

    if (action.type === "REMOVE") {
        return {
            ...state,
            isModalOpen: true,
            modalContent: "movie title removed",
        };
    }

    if (action.type === "CLOSE_MODAL") {
        return {
            ...state,
            isModalOpen: false,
        };
    }

    if (action.type === "LENGHT") {
        return {
            ...state,
            isModalOpen: true,
            modalContent:
                "You have exceeded your max nomination",
        };
    }
    // throw new Error("no matching type");
    return state;
};
