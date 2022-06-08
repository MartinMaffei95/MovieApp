
const CarrouselCard = ({action,id,imgPath})=>{
    return(
        <div onClick={action} key={id} className='CarrouselMovies_movieCard' >
            <img className='CardImage' src={`https://image.tmdb.org/t/p/w500/${imgPath}`}/>
        </div>
    )
}
export default CarrouselCard