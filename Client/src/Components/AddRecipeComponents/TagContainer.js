import React, {useEffect, useState} from 'react'

const TagContainer = (props) => {

    const [Input, setInput] = useState(false);

    const onAddClick = (e) => {
        e.preventDefault();
        setInput(true);
    }

    const onNewTag = (e) => {
        //e.preventDefault();
        console.log(e.target.value);

        if(e.target.value !== ""){
            props.addNew(e.target.value);
        }

        setInput(false);

    }

    const clickDelete = (e) => {

        e.preventDefault();
        //console.log(e.target.name);
        props.delete(e.target.name);

    }

    const enterPressed = (e) => {

        if(e.charCode === 13){
            e.preventDefault();
            onNewTag(e);
        }
    }


    return(

        <div className={"flex flex-col my-2"}>

            <h2>
                {props.name} ({props.limit} Max)
            </h2>

            <div className={"flex flex-wrap my-2 p-2 rounded border border-gray"}>


                {props.current.map( (elem) => {

                    return(
                        <div className={"flex m-1 rounded-full bg-gray-200 items-center text-xs hover:bg-gray-300"}>
                            <h4 className={"m-1 pl-1 pr-2"}>
                                {elem}
                            </h4>
                            <button name={elem} className={"m-1 p-2 rounded-full"} type={"text"} onClick={clickDelete}>
                                x
                            </button>
                        </div>
                    )
                })}



                <div className={"flex m-1 rounded-full bg-gray-200 items-center text-md"}>
                    {Input?
                        <input className={"flex m-1 rounded-full bg-gray-200 items-center outline-none"} autoFocus={true} onBlur={onNewTag} onKeyPress={enterPressed}/>
                        :null
                    }
                </div>

                <div>
                    {(props.current.length < props.limit)?
                        <button className={"flex items-center rounded-full m-1 py-2 px-3 bg-gray-200 text-center hover:bg-gray-300"} type={"text"} onClick={onAddClick}>
                            +
                        </button>

                        :null
                    }
                </div>





            </div>
        </div>


    )

}

export default TagContainer;