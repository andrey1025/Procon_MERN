const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
    from: {
        type: Schema.Types.ObjectId
    },
    to: {
        type: Schema.Types.ObjectId
    },
    message: {
        type: String
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    isRead: {
        type: Boolean,
        default: false
    }
}, { versionKey: false });
const notificationModel = mongoose.model("Notification", notificationSchema, "Notifications");
module.exports = notificationModel;