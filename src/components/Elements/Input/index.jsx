import Input from "./Input";

const TextInput = (props) => {
    const {type, placeholder, classtype, name} = props;
    return (
        <div className="mb-2 flex flex-col w-full justify-center items-center">
            <Input type={type} placeholder={placeholder} classtype={classtype} name={name} id={name} {...props} />
        </div>
    )
}

export default TextInput;