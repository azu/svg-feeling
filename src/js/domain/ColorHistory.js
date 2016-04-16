// LICENSE : MIT
"use strict";
import Color from "./value/Color";
export default class ColorHistory {
    /**
     * @param {Color} [initialColor]
     */
    constructor(initialColor) {
        this._history = initialColor ? [initialColor] : [];
    }

    /**
     * @param {Color} color
     * @returns {boolean}
     */
    isAlreadyUsedColor(color) {
        return this._history.some(historyColor => {
            return historyColor.isEqualColor(color);
        });
    }

    /**
     * @param {Color} color
     */
    recordColor(color) {
        this._history.push(color);
    }

    /**
     * @returns {Color|undefined}
     */
    lastUsedColor() {
        return this._history[this._history.length - 1];
    }
}