# FriendFinder
Dating App that takes results from a survey and compares answers to other users, then displays name and picture of best overall match

This full-stack site uses Express to handle routing and is deployed to Heroku for other users to fill it out
NPM packages used includes: express, body-parser, and path.

A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

The current user's most compatible friend, will then be displayed as a modal pop-up.
