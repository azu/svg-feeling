// LICENSE : MIT
"use strict";
import Color from "./value/Color";
import ColorHistory from "./ColorHistory";
const randomColor = require("randomcolor");
const uuid = require("uuid");
export default class ColorMixer {
    constructor() {
        this.id = uuid();
        this.colorHisotry = new ColorHistory();
    }

    getHistory() {
        return this.colorHisotry;
    }

    currentColor() {
        return this.colorHisotry.lastUsedColor();
    }

    /**
     * next random Color without duplicated
     * @returns {Color}
     */
    nextColor() {
        while (true) {
            const hexCode = randomColor();
            const color = new Color({hexCode});
            if (this.colorHisotry.isAlreadyUsedColor(color)) {
                continue;
            }
            return color;
        }
    }

    /**
     * @param {Color} color
     */
    setColor(color) {
        this.colorHisotry.recordColor(color);
    }
}