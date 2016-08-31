const mongodb = require('./db');
const co = require("co");
const util = require('util');
const settings = require('../settings');

class Post {
    constructor(username, post, time) {
        this.user = username;
        this.post = post;
        this.time = time ? time : new Date();
    };

    static get(username, callback) {
        co(function*() {
            let db = yield mongodb.connect(settings.URL);
            let collection = yield db.collection('posts');
            let query = {};
            if (username) {
                query.user = username;
            }
            let docs = yield collection.find(query).sort({
                time: -1
            }).toArray();

            // 封装 posts 为 Post 对象
            let posts = [];
            docs.forEach((doc, index) => {
                posts.push(new Post(doc.user, doc.post, doc.time));
            });

            yield db.close();
            callback(null, posts);
        }).catch(e => {
            console.log(e)
            callback(JSON.stringify(e), null);
        });
    }

    save(callback) {
        let post = {
            user: this.user,
            post: this.post,
            time: this.time,
        };

        co(function*() {
            var db = yield mongodb.connect(settings.URL);
            var collection = yield db.collection('posts');
            collection.ensureIndex('user');
            yield collection.insert(post, {
                safe: true
            });
            yield db.close();
            callback(null, post);
            return post;
        }).catch(e => {
            console.log(e)
            callback(JSON.stringify(e), null);
        });
    }

}
module.exports = Post;
