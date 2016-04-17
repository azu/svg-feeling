// LICENSE : MIT
"use strict";
const React = require("react");
import IconPalette from "../../project/IconPalette/IconPalette";
import AppContextLocator from "../../../AppContextLocator";
import {ChangeToNextColorUseCase} from "../../../js/UseCase/ChangeToNextColorUseCase";
import {ColorState} from "../../../js/store/ColorStore";
const shallowCompare = require("react-addons-shallow-compare");
export default class PlaygroundContainer extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        const changeNextColor = () => {
            AppContextLocator.context.useCase(ChangeToNextColorUseCase.create()).execute();
        };
        const currentColor = this.props.ColorStore.currentColor;
        return <div className="PlaygroundContainer">
            <IconPalette color={currentColor}/>
            <button onClick={changeNextColor}>Change Color</button>
        </div>
    }
}
PlaygroundContainer.propTypes = {
    // ColorState check
};