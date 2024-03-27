import mongoose, { Schema } from "mongoose";

const { ObjectID } = Schema.Types;

const schema = new Schema({
    content: Object,
    
}, {timestamps: true });

const model = mongoose.model('notise', schema);

export default model;