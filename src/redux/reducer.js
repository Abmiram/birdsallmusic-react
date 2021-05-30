import { LINKS } from '../shared/links';
import { BIOS } from '../shared/bios';
import { MUSIC } from '../shared/music';

export const initialState = {
    links: LINKS,
    bios: BIOS,
    music: MUSIC
};

export const Reducer = (state = initialState, action) => {
    return state;
};