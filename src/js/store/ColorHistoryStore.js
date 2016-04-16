// LICENSE : MIT
"use strict";
import Store from "../framework/Store";
import ColorHistory from "../domain/ColorHistory";
export default class ColorHistoryStore extends Store {
    /**
     * @param {ColorMixerRepository} colorMixerRepository
     */
    constructor({colorMixerRepository}) {
        super();
        this.state = {
            colorHistory: new ColorHistory()
        };
        colorMixerRepository.onChange(() => {
            const colorMixer = colorMixerRepository.lastUsed();
            this.state = Object.assign({}, {
                colorHistory: colorMixer.getHistory()
            });
            this.emitChange();
        });
    }

    getState() {
        return this.state;
    }
}