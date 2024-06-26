interface RatingProps{
    rating:number
}

export const Rating=(props: RatingProps)=>{
    return (
        <div className="crop" style={{width:props.rating*79/5, overflow:"hidden"}}>
            <div style={{width:81}}>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
            </div>
        </div>
    )
}