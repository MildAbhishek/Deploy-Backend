// console.log("Node Backend")

require('dotenv').config()
// console.log(process.env) // remove this after you've confirmed it is working


const express = require('express')
const app = express()
// const port = 3000

const port = process.env.PORT

const githubData = {
    "login": "MildAbhishek",
    "id": 64414279,
    "node_id": "MDQ6VXNlcjY0NDE0Mjc5",
    "avatar_url": "https://avatars.githubusercontent.com/u/64414279?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/MildAbhishek",
    "html_url": "https://github.com/MildAbhishek",
    "followers_url": "https://api.github.com/users/MildAbhishek/followers",
    "following_url": "https://api.github.com/users/MildAbhishek/following{/other_user}",
    "gists_url": "https://api.github.com/users/MildAbhishek/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/MildAbhishek/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/MildAbhishek/subscriptions",
    "organizations_url": "https://api.github.com/users/MildAbhishek/orgs",
    "repos_url": "https://api.github.com/users/MildAbhishek/repos",
    "events_url": "https://api.github.com/users/MildAbhishek/events{/privacy}",
    "received_events_url": "https://api.github.com/users/MildAbhishek/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Abhishek Anand",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "M.Tech in Data and Computational Science, @IIT-Jodhpur",
    "twitter_username": null,
    "public_repos": 12,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2020-04-27T12:02:28Z",
    "updated_at": "2024-05-01T10:47:14Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Pleae login</h1>')
})

app.get('/signup', (req, res) => {
    res.send('<h1>Pleae signup</h1>')
})

app.get('/github', (req, res)=>{
res.json(githubData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})