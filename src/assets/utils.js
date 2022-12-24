import Glide from "@glidejs/glide"


export function createGlide(type, id , autoplayDur){
    let glide = new Glide(`#${id}`, {
        autoplay: autoplayDur,
        type: type,
        rewindDuration: 500,
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
                perView: 1,
                peek: {
                    before: 0,
                    after: 0
                  },
            }
        }
    })
    glide.mount()
} 