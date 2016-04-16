// LICENSE : MIT
"use strict";
import colorMixerRepository from "../infra/ColorMixerRepository";
import ColorStore from "./ColorStore";
import ColorHistoryStore from "./ColorHistoryStore";
export default class AppStoreGroup {
    constructor() {
        /**
         * StateStore array
         * @type {Store[]}
         */
        this.stores = [
            new ColorStore({colorMixerRepository}),
            new ColorHistoryStore({colorMixerRepository})
        ];
    }

}