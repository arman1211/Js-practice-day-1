var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

frnd = friends[0]
friends.forEach(friend=>{
    if(friend.length > frnd.length){
        frnd = friend;
    }
})
console.log(frnd)