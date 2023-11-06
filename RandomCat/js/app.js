const button = document.querySelector('.btn');
const image = document.querySelector('.img');
const url = "https://api.thecatapi.com/v1/images/search";

async function fetchHandler(){
    try{
        const response = await fetch(url)
        const data = await response.json();
        image.src = data[0].url;
        console.log(data[0].url)


    } catch (error) {
        console.log(error)
    }
}
button.addEventListener("click", () => {
    let isLaoded = image.complete;

    if (isLaoded){
    fetchHandler()
    }
}),
image.addEventListener('click', () => {
    let isLaoded = image.complete;

    if (isLaoded){
    fetchHandler()
    }
}
)




// const btn = document.querySelector('img')

// async function randCat(){
//     fetch("https://api.thecatapi.com/v1/images/search")
//     if (response.ok) {
//         const data = await response.json();
//         return data.url
//     }
// }

