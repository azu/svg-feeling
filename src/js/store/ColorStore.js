// LICENSE : MIT
"use strict";
import Store from "../framework/Store";
import Color from "../domain/value/Color";
export default class ColorStore extends Store {
    /**
     * @param {ColorMixerRepository} colorMixerRepository
     */
    constructor({colorMixerRepository}) {
        super();
        this.state = {
            currentColor: new Color({hexCode: "#fff"})
        };
        colorMixerRepository.onChange(() => {
            const colorMixer = colorMixerRepository.lastUsed();
            this.state = Object.assign({}, {
                currentColor: colorMixer.currentColor()
            });
            this.emitChange();
        });
    }

    getState() {
        return this.state;
    }
}