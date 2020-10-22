    module.exports = async function getUser(username) {
    const fetch = require("node-fetch")
    try {
     var command = username;
     const a = await fetch("https://api.roblox.com/users/get-by-username?username=" + command).then(lang => lang.json())
     const id = a.Id;
     const friends = await fetch(`https://friends.roblox.com/v1/users/${id}/friends/count`).then(lang => lang.json())
     const friendscount = friends.count.toLocaleString()
     const follower = await fetch(`https://friends.roblox.com/v1/users/${id}/followers/count`).then(lang => lang.json())
     const gneru = await fetch(`https://friends.roblox.com/v1/users/${id}/friends/`).then(res => res.json())
     const followercount = follower.count.toLocaleString()
     const following = await fetch(`https://friends.roblox.com/v1/users/${id}/followings/count`).then(lang => lang.json())
     const followingcount = following.count.toLocaleString()
     const game = await fetch(`https://games.roblox.com/v2/users/${id}/games`).then(lang => lang.json())
     const joker = await fetch(`https://friends.roblox.com/v1/users/${id}/followers/`).then(res => res.json())
     let gay;
     if (!joker.data.length) {
       gay = "No followers"
     } else {
       gay = joker.data.map(pokemon => pokemon.name)
     }
     const games = game.data.map(s => s.name)
     const group = await fetch(`https://groups.roblox.com/v2/users/${id}/groups/roles`).then(lang => lang.json())
     let groups;
     const last = await fetch(`http://api.roblox.com/users/${id}/onlinestatus/`).then(lang => lang.json())
     const lastOnline = last.LastOnline
     if (group.data[0] == undefined) {
       groups = "No groups"
     } else {
       groups = group.data.map(fgh => fgh.group.name)
     }
     let hahkid;
     if (!gneru.data.length) {
      hahkid = "No friends"
     } else {
       hahkid = gneru.data.map(breuhk => breuhk.name)
     }
     const item = await fetch(`https://avatar.roblox.com/v1/users/${id}/avatar`).then(lang => lang.json())
     const ting = await fetch(`https://users.roblox.com/v1/users/${id}/status`).then(lang => lang.json()) || "No status"
     const moment = require("moment")
     let skid;
     const kiddo = await fetch(`https://friends.roblox.com/v1/users/${id}/followings/`).then(imtired => imtired.json())
     if (!kiddo.data.length) {
       skid = "No followings"
     } else {
       skid = kiddo.data.map(kpop => kpop.name)
     }
     let items 
     if (item.assets == undefined) {
       items = "No items on"
     } else {
       items = item.assets.map(okh => okh.name)
     }
     let fumi;
     if (last.IsOnline == true) {
       fumi = "Online right now"
     } else {
       fumi = moment(lastOnline).fromNow()
     }
     let suck;
     if (!ting.status.length) {
       suck = "No status"
     } else {
       suck = ting.status
     }
     var yomironda = ({
       username: a.Username,
       id: id,
       status: suck,
       last_online: fumi,
       friends: ({
         count: friendscount,
         friends: hahkid
       }),
       followers: ({
         count: followercount,
         followers: gay
       }),
       following: ({
         count: followingcount,
         following: skid
       }),
       games: ({
         count: games.length,
         games: games
       }),
       groups: ({
         count: groups.length,
         groups: groups
       }),
       avatar: ({
         items: ({
           amount: items.length,
           items: items
         }),
         link: `https://web.roblox.com/Thumbs/Avatar.ashx?x=100&y=100&Format=Png&userid=${id}`
       })
     })
     return yomironda;
     
  
   } catch (error) {
     var err = ({
       success: false,
       message: "User not found"
     })
     return err;
   }
}
