import { useState } from "react"


export const useForm = (initialState = {}) => {

    const [ values, setValues ] = useState(initialState);


   const handleInputChange = ({target}) => {
        // e.preventDefault();
        // console.log("hola");
        setValues({
            ...values,
            [ target.name ]: target.value,
        });
    }

    return [ values, handleInputChange ]


}