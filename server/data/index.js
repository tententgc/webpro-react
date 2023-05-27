import mongoose from "mongoose";

const userIds = [
    new mongoose.Types.ObjectId(),
]

export const users = [
    {
        _id: userIds[0],
        firstName: "tentasden",
        lastName: "tgadsc",
        userName: "tententasdsagc",
        email: "nyman3527dasdsad@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        picturePath: "p11.jpeg",
        friends: [],
        description: "Software Engineer",
        role: "user", 
        viewedProfile: 10,
        impressions: 10,
        createdAt: 1115211422,
        updatedAt: 1115211422,
        __v: 0,
    }
];

export const posts = [
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[1],
        firstName: "Steve",
        lastName: "Ralph",
        location: "New York, CA",
        description: "Some really long random description",
        picturePath: "post1.jpeg",
        userPicturePath: "p3.jpeg",
        likes: new Map([
            [userIds[0], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true],
        ]),
        comments: [
            "random comment",
            "another random comment",
            "yet another random comment",
        ],
    },

];