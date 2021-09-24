
import { useState } from "react";
import '../App.css'
import {AiTwotoneDislike, AiTwotoneLike} from  'react-icons/ai'
const LikeCounter=()=>{
    const [count,setCount]=useState(0);
    const [isHovered,setIsHovered]=useState(false);
    const handleCount=(e)=>{
        setCount(count+1);
      }
    


    return(
        <div className="likes">
            <button onClick={handleCount}>
                <AiTwotoneLike/>{count!=0 && <span>{count}</span>}
                
            </button>

        </div>
    )
}

export default LikeCounter;