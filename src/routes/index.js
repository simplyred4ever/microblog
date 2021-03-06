/*
 * GET home page.
 */
const Post = require('../models/post.js');
const {
    markdown
} = require('markdown');
const moment = require("moment");
const React = require('react');
const PostList = require('../views/post.js');

module.exports = function(app) {
    const routes = ['./reg', './login', './logout', './post', './user', './file'];

    for (let i of routes) {
        require(i)(app);
    }
    // 首页
    app.get('/', (req, res) => {
        Post.get(null, (err, posts) => {
            if (err) {
                posts = [];
            }
            for (let post of posts) {
                post.time = moment(post.time).format("YYYY-MM-DD HH:mm:ss");
            }

            console.log('2 ** 0.5 = ' + 2 ** 0.5);// test es2016

            res.render('index', {
                title: '首页',
                csrfToken: req.csrfToken(),
                posts: PostList(posts, req.session.user) //posts
            });
        });
    });
};
