const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const likeBtn = document.querySelector("#like-btn")
let currentLikes = document.querySelector("#likes")
const initialLikes = 21432
currentLikes.textContent = initialLikes.toLocaleString() //Add formatting to the initial likes -> 21,432
let likeCount = parseInt(currentLikes.textContent.replace(/,/g,'')) //Get the number without formatting -> 21432
let likeStatus = false //Button not clicked yet:

let heartIcon = document.querySelector("#like-icon")
console.log(heartIcon)

likeBtn.addEventListener("click", function(){
    //update likeCount by 1
    //change currentLikes to like count
    //change likes to true
    if (likeStatus === false){
        likeCount += 1
        // console.log(likeCount)
        // console.log(currentLikes)
        currentLikes.textContent = likeCount.toLocaleString()
        likeStatus = true
        heartIcon.src = "images/icon-heart-filled.svg"

    } else{
        likeCount -= 1
        currentLikes.textContent = likeCount.toLocaleString()
        likeStatus = false
        console.log("Unliked")
        heartIcon.src = "images/icon-heart.svg"
    }
})
