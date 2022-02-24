import { TOMBOL_SIDEBAR_TOGGLE } from "../constants/TombolSidebar";

const initialState = {
    isOpen: false
};


export default function getTombolSidebar(state = initialState, action) {
    switch (action.type) {
        case TOMBOL_SIDEBAR_TOGGLE:
            return {
                ...state,
                isOpen: !state.isOpen
            };
        default:
            return state;
    }
}