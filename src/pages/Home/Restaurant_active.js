import Play from './photo/restaurant_active_play.png'

export const Restaurant_active = ()=>{
    return(
        <div className="restaurant_active">
            <h3>Restaurant Active Process</h3>
            <h2><span>We</span> Document Every Food Bean Process untile it is saved</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna</p>
            <div className="button_play">
                <button className='btn btn1'>Read More</button>
                <div className="play_video">
                    <img src={Play} alt="" />
                    <h5>Play Video</h5>
                </div>
            </div>
        </div>
    )
}