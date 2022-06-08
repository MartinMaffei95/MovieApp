import { BsStarFill ,BsStar } from "react-icons/bs";

const HelperStarsVotes = (stars)=>{ 
    let points = []
    let num = Math.round(stars);
    let i = 0;
    for(i ; i < 10; i++){
      if(i< stars){
        points.push(<BsStarFill key={i} className="Icon fillStar" />)
      }else{
        points.push(<BsStar key={i} className="Icon eptyStar" />)
      }
    }
    return [points]
  }

export default HelperStarsVotes