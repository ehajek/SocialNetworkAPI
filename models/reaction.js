const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      reactionBody: {
        type: String,
        required: true,
        match: [/^.{1,280}$/, 'Text for Reaction must be between 1 and 280 characters.']
      },
      userName: {
        type: String,
        required: 'User Name is required'
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    });
    
const Reaction = reactionSchema;
module.exports = Reaction;



