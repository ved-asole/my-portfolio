import Glide from "@glidejs/glide"

export function createGlide(id){
    var glide = new Glide(`#${id}`, {
        type: 'slider',
        gap:50,
        autoplay:2000,
        hoverpause:true,
        peek: {
            before: 100,
            after: 100
          },
        perView: 3,
        focusAt: 'center',
        breakpoints: {
            1280: {
                perView: 2
            },
            768:{
                perView:1
            }
        }
    })

    glide.mount()
} 