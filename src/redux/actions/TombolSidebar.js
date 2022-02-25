import { TOMBOL_SIDEBAR_TOGGLE } from '../constants/TombolSidebar';


export const tombolSidebar = (isOpen) => {
    return {
        type: TOMBOL_SIDEBAR_TOGGLE,
        payload: isOpen
    }
}