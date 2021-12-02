export default function(formData,formValidationRules) {
    const errors = {};
    let hasErrors = false;
    Object.keys(formValidationRules).forEach( keyRule => {
        formValidationRules[keyRule].map( f => {
            if (typeof formData[keyRule] !== 'undefined'){
                let response = f(formData);
                if(typeof response === 'string') { // Infocar la función
                    errors[keyRule] = { error: true, helperText:response };
                    hasErrors = true;
                } else if (typeof errors[keyRule] === 'undefined') {
                    errors[keyRule] = { keyRule: { error: false, helperText:response }};
                    hasErrors = hasErrors || false;
                }
            }
            return null;
        });
    });
    return {
        errors,
        hasErrors,
    };
}
