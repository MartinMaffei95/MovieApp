
    export const HelperRouleteScrollings = (reference)=>{

        const scrollingRight =   ()=>{
                let carr = reference.current
                carr.scrollLeft += carr.offsetWidth
          }
          const scrollingLeft =   ()=>{
                let carr = reference.current
                carr.scrollLeft -= carr.offsetWidth
          }  

          return [scrollingRight,scrollingLeft]
    }
    