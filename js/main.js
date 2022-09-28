var images = ["img/Bitmap-1.png","img/Bitmap-2.png","img/Bitmap-3.png","img/Bitmap-4.png"];
// var image = {
//     "img1":"img/Bitmap-1.png",
//     "img2":"img/Bitmap-2.png",
//     "img3":"img/Bitmap-3.png",
//     "img4":"img/Bitmap-4.png"
// }
const section = document.querySelector('section');
// const image1 = document.querySelector('#img1');
// const image2 = document.querySelector('#img2');
// const image3 = document.querySelector('#img3');
// const image4 = document.querySelector('#img4');


// let randomIndex = (arr) => ;
function randomIndex(arr){
    let randomized = arr.sort(()=> 0.5 - Math.random());
    return randomized;
}

function setImages(){
    var res = randomIndex([0,1,2,3]);
    console.log(res)
    section.innerHTML = `
    <div class="image">
         <img src=${images[res[0]]} alt="" id ="img1">
    </div>
    <div class="image">
        <img src=${images[res[1]]} alt="" id ="img2">
    </div>
    <div class="image">
        <img src= ${images[res[2]]} alt="" id ="img3">
    </div>
    <div class="image">
        <img src=${images[res[3]]} alt="" id ="img4">
    </div>`

    // res = null;
}

setInterval(setImages, 1000);