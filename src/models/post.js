const mongodb = require('./db');
const co = require("co");
const util = require('util');
const settings = require('../../settings');
const {
    ObjectID
} = require('mongodb');

class Post {
    constructor(username, post, time, _id) {
        this._id = _id;
        this.user = username;
        this.post = post;
        this.time = time ? time : new Date();
    };

    static get(username, callback) {
        co(function*() {
            const db = yield mongodb.connect(settings.URL);
            const collection = yield db.collection('posts');
            const query = {};
            if (username) {
                query.user = username;
            }
            const docs = yield collection.find(query).sort({
                time: -1
            }).toArray();

            // 封装 posts 为 Post 对象
            const posts = [];
            docs.forEach((doc, index) => {
                posts.push(new Post(doc.user, doc.post, doc.time, doc._id));
            });

            yield db.close();
            callback(null, posts);
        }).catch(e => {
            console.log(e);
            callback(JSON.stringify(e), null);
        });
    }

    save(callback) {
        const post = {
            user: this.user,
            post: this.post,
            time: this.time,
        };

        co(function*() {
            const db = yield mongodb.connect(settings.URL);
            const collection = yield db.collection('posts');
            collection.ensureIndex('user');
            yield collection.insert(post, {
                safe: true
            });
            yield db.close();
            callback(null, post);
            return post;
        }).catch(e => {
            console.log(e);
            callback(JSON.stringify(e), null);
        });
    }

    static remove(_id, callback) {
        co(function*() {
            const db = yield mongodb.connect(settings.URL);
            const collection = yield db.collection('posts');
            yield collection.findAndRemove({
                _id: new ObjectID(_id)
            });
            yield db.close();
            callback(null);
            return null;
        }).catch(e => {
            console.log(e);
            callback(JSON.stringify(e), null);
        })
    }

}
module.exports = Post;
