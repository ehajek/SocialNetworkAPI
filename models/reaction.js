const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      reactionBody: {
        Type: String,
        required: 'Text for Reaction is required!',
        match: [/^.{1,280}$/, 'Text for Reaction must be between 1 and 280 characters.']
      },
      userName: {
        type: String,
        required: 'User Name is Required'
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
    
const Reaction = model('Reaction', reactionSchema);
module.exports = Reaction;



