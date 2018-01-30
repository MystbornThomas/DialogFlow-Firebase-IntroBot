const UnhandledAction = require("./UnhandledAction.js");

const admin = require('firebase-admin');
const functions = require('firebase-functions'); // Cloud Functions for Firebase library
// Setup DB connection
admin.initializeApp(functions.config().firebase);
var db = admin.firestore();

/**
 * Stores feedback in Firestore db
 * @type {module.InputFeedbackStore}
 */
module.exports = class InputFeedbackStore extends UnhandledAction {
    getNormalResponse() {
        // TODO: Store this per session/per timestamp?
        let feedbackRef = db.collection('miscData').doc('feedback');
        console.log("action =>", this.action);
        console.log("parameters =>", this.parameters);
        console.log("inputContexts =>", this.inputContexts);
        console.log("requestSource =>", this.requestSource);
        console.log("userInputString =>", this.userInputString);

        feedbackRef.set({
            "feedbackData" : this.userInputString,
            "timestamp" : this.timestamp
        });

        return "IntroBot Testfeedback-from deploy! " + this.userInputString + " " + this.timestamp;
    }
}
