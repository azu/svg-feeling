// LICENSE : MIT
"use strict";
import React from "react";
import ReactDOM from "react-dom";
import App from "./component/container/App";
import AppContextLocator from "./AppContextLocator";
// store
import ReadAggregate from "./js/store/ReadAggregate";
// context
import AppContext  from "./js/framework/Context";
import Dispatcher from "./js/framework/Dispatcher";
import ContextLogger from "./js/util/ContextLogger";
// instances
const readAggregate = new ReadAggregate();
const dispatcher = new Dispatcher();
// context connect dispatch with stores
const appContext = new AppContext({
    dispatcher,
    stores: readAggregate.stores
});
// LOG
const Perf = require('react-addons-perf');
window.Perf = Perf;

if (process.env.NODE_ENV === `development`) {
    const logMap = {};
    dispatcher.onWillExecuteEachUseCase(useCase => {
        const startTimeStamp = performance.now();
        console.groupCollapsed(useCase.name, startTimeStamp);
        logMap[useCase.name] = startTimeStamp;
        console.log(`${useCase.name} will execute`);
    });
    dispatcher.onDispatch(payload => {
        ContextLogger.logDispatch(payload);
    });
    appContext.onChange((stores) => {
        ContextLogger.logOnChange(stores);
    });
    dispatcher.onDidExecuteEachUseCase(useCase => {
        const startTimeStamp = logMap[useCase.name];
        const takenTime = performance.now() - startTimeStamp;
        console.log(`${useCase.name} did executed`);
        console.info("Take time(ms): " + takenTime);
        console.groupEnd(useCase.name);
    });
}
// Singleton
AppContextLocator.context = appContext;
// entry point
ReactDOM.render(<App appContext={appContext}/>, document.getElementById("js-app"));