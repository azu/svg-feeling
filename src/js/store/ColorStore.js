// LICENSE : MIT
"use strict";
import ReduceStore from "./store-pattern/ReduceStore";
import Color from "../domain/value/Color";
export default class ColorStore extends ReduceStore {
    /**
     * @param {ColorMixerRepository} colorMixerRepository
     */
    constructor({colorMixerRepository}) {
        super();
        this.state = {
            currentColor: new Color({hexCode: "#fff"})
        };
        // from useCase
        // `this.onDispatch("ChangeColorUseCase", this.updateState);`
        // from Repository
        colorMixerRepository.onChange(() => {
            const color = colorMixerRepository.lastUsed().currentColor();
            this.updateState({
                type: "colorMixerRepository",
                color
            })
        });
    }

    reduce(prevState, payload) {
        switch (payload.type) {
            case "colorMixerRepository":
                return {currentColor: payload.color};
            default:
                return prevState;
        }
    }
}