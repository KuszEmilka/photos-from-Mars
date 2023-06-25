function changeBackground (imageURL) {
    document.body.style.backgroundImage = "url('" + imageURL + "')"
}

// let dataURL = 'https://api.nasa.gov/planetary/apod?api_key=pLWZ8MFxEA1NCdI6Lc9D4ELY3bAEVS0FZoopetPu';
let urlMars = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=pLWZ8MFxEA1NCdI6Lc9D4ELY3bAEVS0FZoopetPu'
let gallery = document.getElementById('content')

function getMarsPicture () {
    fetch (urlMars)
        .then((resp) => {
            return resp.json()
        })
        .then((data) => {
            let pictureList = data.photos
            createGallery(pictureList)
        })
}

function createGallery(dataList) {
    for (let i = 0; i < 9; i++) {
        let img = document.createElement('img')
        let imgPath = dataList[i].img_src
        img.src = imgPath
        gallery.appendChild(img)
    }
}
// function getPicture() {
//     fetch(dataURL)
//     .then((resp) => {
//         console.log("To działa!")
//         return resp.json()
//     })
//     .then((data) => {
//         changeBackground (data.hdurl)
//     })
// }

// getPicture()
getMarsPicture()