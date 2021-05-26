import React, {useState} from "react";
import './Card.css'
import LikeButton from "../../common/svgs/LikeButton";
import LikeButtonClick from "../../common/svgs/LikeButtonClick";

interface props {
    item?:any;
}
const Card:React.FunctionComponent<props> = (item:any) => {
    const [like,setLike] = useState<boolean>(false)
    console.log(item.item.photographer)
    return(
        <>

            <div  className={'col-lg-4 mb-5 mb-lg-0'}>
                <div className={'mw-100 m-2 shadow-1-strong'}
                     style={{backgroundImage:`url(${item.item.src.landscape})`,
                         width:'100%',borderRadius:20,
                         backgroundSize:'cover',minHeight:'250px',display:'flex',justifyContent:'space-between',alignItems:'flex-end',padding:15}}>
                    <div className={'font-weight-bold'} style={{color:'white'}}>
                        {item.item.photographer}
                    </div>
                    <div>
                        <button id={'button'} onClick={() => setLike(!like)}>
                            {like ?  <LikeButtonClick color={'#fed53d'} /> : <LikeButton/>}
                        </button>


                    </div>
                </div>
            </div>
        </>
    )
}


export default Card
