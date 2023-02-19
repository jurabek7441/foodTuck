


export let Oydin_form = ()=>{
    return(
        <div className="oydin_form">
            <form action="">
                <div className="form_item">
                    <label htmlFor="adres">adres</label>
                    <input type="text" name="adres" id="adres" placeholder="create adres"/>
                </div>
                <div className="form_item">
                    <label htmlFor="telephone">Телефон</label>
                    <input type="text" name="telephone" id="telephone" placeholder=" create phone number" />
                </div>
                <div className="form_item">
                    <label htmlFor="number">Номер</label>
                    <input type="number" name="number" id="number" placeholder="" />
                </div>
                <div className="form_item">
                    <label htmlFor="sleeping_places">Спальные места</label>
                    <input type="number" name="sleepin_places" id="sleeping_places" placeholder="sleeping places" />
                </div>
                <div className="form_item">
                    <label htmlFor="arrival_date">Дата заезда</label>
                    <input type="date" name="arrival_date" id="arrival_date" placeholder="arrival date" />
                </div>
                <div className="form_item">
                    <label htmlFor="date_of_departure">Дата выезда</label>   
                    <input type="date" name="date_of_departure" id="date_of_departure" placeholder="date of departure" />
                </div>
                <div className="form_item">
                    <label htmlFor="telephone">Способ оплаты</label>
                    <select class="form-control form-control-lg">
                        <option>Large select</option>
                    </select>
                </div>
            </form>
        </div>
    )
}