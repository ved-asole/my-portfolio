import Glide from "@glidejs/glide"


export function createGlide(type, id){
    let glide = new Glide(`#${id}`, {
        type: type,
        rewindDuration: 5000,
        gap:20,
        hoverpause:true,
        peek: {
            before: 100,
            after: 100
          },
        perView: 2,
        focusAt: 'center',
        breakpoints: {
            1280: {
                perView: 1
            }
        }
    })
    glide.mount()
} 