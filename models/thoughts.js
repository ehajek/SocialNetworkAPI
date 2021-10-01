const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const reactionSchema = require('./reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            Type: String,
            required: 'Text for Thought is required!',
            match: [/^.{1,280}$/, 'Text for Thought must be between 1 and 280 characters.']
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        userName: {
            type: String,
            required: 'User Name is Required'
        },
        reactions: [
            reactionSchema
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    });


thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);
module.exports = Thought;