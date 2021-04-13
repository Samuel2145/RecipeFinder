import React from 'react'

const Cuisine = (props) => {


    const changeHandler = (e) => {
        props.change(e.target.value);
    }

    return(
        <div className={"flex flex-col my-2"}>
            <label for={"Cuisine"}>Cuisine Type</label>
            <input type={"text"} list={"Cuisines"} name={"Cuisine"} className={"border py-2 px-3 text-grey-darkest rounded-lg"} onChange={changeHandler}/>

            <datalist id={"Cuisines"}>
                {props.list.map( (elem) => {

                    return(
                        <option value={elem}>{elem}</option>
                    )

                })}
            </datalist>
        </div>
    )

}

export default Cuisine;