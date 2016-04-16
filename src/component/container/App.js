// LICENSE : MIT
"use strict";
const React = require("react");
import AppContextLocator from "../../AppContextLocator";
import PlaygroundContainer from "./PlaygroundContainer/PlaygroundContainer";
import HistoryContainer from "./HistoryContainer/HistoryContainer";
// Container
export default class App extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = AppContextLocator.context.getState();
    }

    componentDidMount() {
        const context = AppContextLocator.context;
        // when change store, update component
        const onChangeHandler = () => {
            return requestAnimationFrame(() => {
                this.setState(context.getState());
            })
        };
        context.onChange(onChangeHandler);
    }

    render() {
        const {currentColor, colorHistory} = this.state;
        return <div>
            <PlaygroundContainer color={currentColor}/>
            <HistoryContainer colorHistory={colorHistory} />
        </div>;
    }
}
App.propTypes = {
    documentStateStore: React.PropTypes.any
};