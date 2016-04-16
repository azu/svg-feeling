// LICENSE : MIT
"use strict";
const React = require("react");
import ColorHistoryList from "../../project/ColorHistoryList/ColorHistoryList";
export default class HistoryContainer extends React.Component {
    render() {
        return <div className="HistoryContainer">
            <ColorHistoryList {...this.props}/>
        </div>
    }
}