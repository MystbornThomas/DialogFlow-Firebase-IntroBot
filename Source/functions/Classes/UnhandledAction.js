/**
 * Class to handle base action functionality
 */
module.exports = class UnhandledAction {

    setData(action, parameters, inputContexts, requestSource, userInputString, timestamp){
        this.action = action;
        this.parameters = parameters;
        this.inputContexts = inputContexts;
        this.requestSource = requestSource;
        this.userInputString = userInputString;
        this.timestamp = timestamp;
    }

    // Implement in child class
    getGoogleResponse() {
        return this.getNormalResponse();
    }

    // Implement in child class
    getNormalResponse() {
        return "Not implemented";
    }
}
