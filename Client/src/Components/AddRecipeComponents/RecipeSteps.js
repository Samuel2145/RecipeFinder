import React, {useState} from 'react';


const RecipeSteps = (props) => {


    const [Input, setInput] = useState(false);

    const onAddClick = (e) => {
        e.preventDefault();
        setInput(true);
    }

    const onNewStep = (e) => {

        //console.log(e.target.value);
        props.addNewStep(e.target.value);
        setInput(false);
    }

    const clickDelete = (e) => {

        e.preventDefault();
        props.deleteStep(e.target.name);
    }

    const enterPressed = (e) => {

        if(e.charCode === 13){
            e.preventDefault();
            onNewStep(e);
        }
    }

    return(
        <div className={"flex flex-col my-2"}>
            <h2>
                Recipe
            </h2>

            <div className={"flex flex-col items-center my-2 p-2"}>

                {props.current.map( (elem) => {

                    return(
                        <div  className={"flex w-full m-1 rounded-full bg-gray-200 items-center text-sm hover:bg-gray-300"}>
                            <h4 className={"flex flex-col w-11/12 m-1 pl-3 pr-2 overflow-auto"}>
                                {elem}
                            </h4>
                            <button name={elem} className={"w-1/12 p-2 rounded-full"} type={"text"} onClick={clickDelete}>
                                x
                            </button>
                        </div>
                    )
                })}

                <div className={"flex m-1 w-full rounded-full bg-gray-200 items-center text-md"}>
                    {Input?
                        <textarea className={" m-1 w-full pl-5 pr-3 rounded-full bg-gray-200 outline-none"} autoFocus={true} onBlur={onNewStep} onKeyPress={enterPressed}/>
                        :null
                    }
                </div>

                <button className={"w-full rounded-full py-2 text-center bg-gray-200 hover:bg-gray-300 "} type={"text"} onClick={onAddClick}>
                    +
                </button>

            </div>

        </div>
    )

}


export default RecipeSteps;