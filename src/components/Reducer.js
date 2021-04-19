export const reducer = (action, state) => {
    if (action.type === "ADD_MOVIE") {
        return {
            ...state,
            isModalOpen: true,
            modalContent: "Movie nomination added",
        };
    }

    if (action.type === "REMOVE") {
        return {
            ...state,
            isModalOpen: true,
            modalContent: "movie nomination removed",
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
                "You have exceeded your maximum movies nomination",
        };
    }
    // throw new Error("no matching type");
    return state;
};
