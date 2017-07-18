
import moongoose from 'mongoose';
const Schema = mongoose.Schema;

let articleSchema = new Schema({

    title: { type: String, unique: true },
    date: {type: Date, default: Date.now},
    url: { type: String, unique: true }

});

let Article = mongoose.model('Article', articleSchema);

module.exports = Article;