import { TOMBOL_SIDEBAR } from '../constants/ActionTypes';


export const tombolSidebar = (isOpen) => {
    return {
        type: TOMBOL_SIDEBAR,
        payload: isOpen
    }
}