# roblox-user-information

## Installing 
`npm i roblox-user-information`

## Usage

### Input
```js
(async() => {
  const getUser = require("roblox-user-information")
  await getUser("amazingjimmy312").then(user => {
    console.log(user)
  })
})()
```
### Output
```
{
  username: 'amazingjimmy312',
  id: 1795251175,
  status: 'hi !!',
  last_online: '5 hours ago',
  friends: {
    count: '15',
    friends: [
      'andreiplayer11',
      '6rror',
      'he_believed',
      'xXDannyMonstahBoiXx',
      'H7nshy',
      'moh3933',
      'VenusInTheEarth',
      'waynechen_wingfai',
      'swyywuus',
      'Yuichi_Jana',
      'Linhfrostyrg',
      'frostynor',
      'wiki27y',
      'ANVNdepzai12',
      'loulouchach'
    ]
  },
  followers: { count: '0', followers: 'No followers' },
  following: { count: '0', following: 'No followings' },
  games: { count: 1, games: [ "amazingjimmy312's Place" ] },
  groups: { count: 1, groups: [ 'United States Army    ' ] },
  avatar: {
    items: { amount: 10, items: [Array] },
    link: 'https://web.roblox.com/Thumbs/Avatar.ashx?x=100&y=100&Format=Png&userid=1795251175'
  }
}
```
