const btn = document.querySelector("#btn")
const emoji_name = document.querySelector("#emoji-name")

const API_KEY = "c4c13b26774dc122ac745ddc452558e05d8b476c"

const emoji = []

const getEmoji = async () => {
    const res = await fetch(`https://emoji-api.com/emojis?access_key=${API_KEY}`)
    const data = await res.json()

    for (let i = 0; i < 1500; i++) {
        emoji.push({
            emojiName: data[i].unicodeName,
            emojiIcon: data[i].character,
        })
    }
}

getEmoji()

btn.addEventListener("click", () => {

    const randomNum = Math.floor(Math.random() * emoji.length)

    btn.innerHTML = emoji[randomNum].emojiIcon

    emoji_name.innerHTML = emoji[randomNum].emojiName.slice(5)
})