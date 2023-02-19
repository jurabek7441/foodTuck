import {AiFillPrinter} from 'react-icons/ai'
import Icon from '../pages/Home/photo/oydin_plaza.png'
export let OydinPlaza=()=>{
    return(
        <div className="oydinPlaza">
            <div className="header">
                <div className="header_title">
                <h1>Ваше бронирование подтверждено</h1>
                <h2>Apartment Camelia, Zhukovskogo 6</h2>
                </div>
                <div className="header_content">
                    <button><AiFillPrinter/>  Распечатать</button>
                    <p>Пожалуйста распечатайте и предъявите это подтверждение в отеле при заселении</p>
                </div>
            </div>
            <div className="body">
                <div className="icon"><img src={Icon} alt="" /></div>
                
                <div className="body_content">
                    <div className="adres">
                        <h4>адрес</h4>
                        <h5>Uzbekistan, Namangan</h5>
                    </div>
                    <div className="telephone">
                        <h4>Телефон</h4>
                        <h5>+998...</h5>
                    </div>
                    <div className="bron_number">
                        <h4>Бронирование №</h4>
                        <h5>611019693</h5>
                    </div>
                    <div className="kod_podtver">
                        <h4>Код подтверждения</h4>
                        <h5>611019693</h5>
                    </div>
                    <div className="number">
                        <h4>Номер</h4>
                        <h5>Двухместный номер Standard (двуспальная кровать)</h5>
                    </div>
                    <div className="date_zayezda">
                        <h4>Дата заезда</h4>
                        <h5><span>пт,</span>25 марта<span>2022</span>с 14:00</h5>
                    </div>
                    <div className="date_viyezda">
                        <h4>Дата выезда</h4>
                        <h5><span>пн,</span>28 марта<span>2022</span>с 19:00</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}