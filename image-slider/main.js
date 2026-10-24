let bigImage= document.getElementById("big-image")

let thumb=document.querySelectorAll(".thumb")

thumb.forEach((thumbs)=>{
    thumbs.addEventListener("click", ()=>{
        bigImage.src =thumbs.src
    })
})