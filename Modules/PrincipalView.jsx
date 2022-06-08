import MoviesCarrousel from '../Modules/Carrousel'
import MovieModal from '../Modules/MovieModal'
import {  useState } from "react"


const PrincipalView=()=>{
  const [isActive,setIsActive] = useState(false);

    const modalHandler=()=>{
        if(isActive){
          setIsActive(false)
        }else{
          setIsActive(true)
        }
        return{isActive}
      }

    return(
        <>
        <section className='RecomendedSection'>
          <MoviesCarrousel action={modalHandler} moviegender='Action' />
          <MoviesCarrousel action={modalHandler} moviegender='Horror' />
          <MoviesCarrousel action={modalHandler} moviegender='Drama' />
          <MoviesCarrousel action={modalHandler} moviegender='Romance' />


        </section>
        <MovieModal action={modalHandler} isActive={isActive}/>
        </>

    )
}
export default PrincipalView