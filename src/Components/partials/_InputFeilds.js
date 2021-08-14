const InputField = {}

InputField.text = () => {
    return(
        <input type='text' />
    )
}

InputField.password = () => {
    return(
        <input type='password' />
    )
}

InputField.email = () => {
    return(
        <input type='email' />
    )
}

InputField.number = () => {
    return(
        <input type='number' />
    )
}

InputField.textArea = () => {
    return(
        <input type='textArea' />
    )
}

const InputFeilds = ({ type, label }) => {
    let RequiredInputField

    switch ({ type }) {
        case 'text':
            RequiredInputField = InputField.text()
            break;
        case 'email':
            RequiredInputField = InputField.email()
            break;
        case 'passwrd':
            RequiredInputField = InputField.password()
            break
        case 'number':
            RequiredInputField = InputField.number()
            break;
        case 'textArea':
            RequiredInputField = InputField.textArea()
            break;
        default:
            break;
    }

    // console.log(RequiredInputField);
    return (
        <div className="form-control">
            <label htmlFor={ label }> Enter { label } </label>
            < RequiredInputField />
        </div>
    )
}

export default InputFeilds
