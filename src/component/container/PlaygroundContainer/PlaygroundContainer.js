// LICENSE : MIT
"use strict";
const React = require("react");
import IconPalette from "../../project/IconPalette/IconPalette";
import AppContextLocator from "../../../AppContextLocator";
import {ChangeToNextColorUseCase} from "../../../js/UseCase/ChangeToNextColorUseCase";
export default class PlaygroundContainer extends React.Component {
    render() {
        const changeNextColor = () => {
            AppContextLocator.context.useCase(ChangeToNextColorUseCase.create()).execute();
        };
        return <div className="PlaygroundContainer">
            <IconPalette color={this.props.color}/>
            <button onClick={changeNextColor}>Change Color</button>
        </div>
    }
}