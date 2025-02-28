const { Comment } = require('../models');

const commentData = [
    {
        content: "No way!",
        user_id: 2,
        post_id: 3,
        
    },
    {
        text: "First Comment :)",
        user_id: 2,
        post_id: 5,
        
    },
    {
        content: "Is this believable?",
        user_id: 4,
        post_id: 1,
        
    },
    {
        content: "Nice.",
        user_id: 3,
        post_id: 5,
        
    },
    {
        content: "Groundbreaking stuff, going to follow this post closely.",
        user_id: 3,
        post_id: 4,
        
    },
    {
        content: "As if!",
        user_id: 2,
        post_id: 1,
        
    },
    {
        content: "Right, you're entitled to your own opinion.",
        user_id: 5,
        post_id: 3,
        
    },
    {
        content: "Awesome, I'd like to know more.",
        user_id: 2,
        post_id: 1,
        
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;