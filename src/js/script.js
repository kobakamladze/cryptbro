"use strict";

import calc from "./modules/calculator";
import list from "./modules/list";
import menu from "./modules/menu";

document.addEventListener(`DOMConentLoaded`, () => {
    calc();
    list();
    menu();
});