import React, {useState} from 'react'

const TasteButton = (props) => {

    /*
    const [value, setValue] = useState(1)

    const upClick = (e) => {

        //e.preventDefault();
        const currentValue = value;
        if((currentValue + 1) <= 5)
            setValue(currentValue + 1);

    }

    const downClick = (e) => {

        //e.preventDefault();
        const currentValue = value;
        if((currentValue - 1) >= 1)
            setValue(currentValue - 1);

    }
     */

    const upClick = (e) => {

        const currentValue = props.value;
        if((currentValue + 1) <= 5)
            props.setValue(currentValue + 1);

    }

    const downClick = (e) => {

        const currentValue = props.value;
        if((currentValue - 1) >= 1)
            props.setValue(currentValue - 1);

    }

    return(
        <div className="flex">

            <div className="rounded-l-lg flex flex-col justify-center md:w-4/6 border border-solid" >
                <h1 className="text-center">{props.value}</h1>
            </div>

            <div className="flex flex-col justify-center md:w-2/6">

                <button className="hover:bg-gray-300 border border-solid rounded-tr-lg" type="button" onClick={upClick}>
                    {String.fromCharCode(9650)}
                </button>
                <button className="hover:bg-gray-300 border border-solid rounded-br-lg" type="button" onClick={downClick}>
                    {String.fromCharCode(9660)}
                </button>

            </div>
        </div>
    )
}


export default TasteButton;