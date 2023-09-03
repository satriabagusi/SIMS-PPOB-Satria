const Input = (props) => {
  const { classtype, type, placeholder, name} = props;

  const classname = "border border-x-gray-300 p-2 rounded w-96  focus-visible:outline-red-500 h-12 mb-4 " + classtype;



  return (
    <input
      className={classname}
      type={type}
      placeholder={placeholder}
      name={name}
      id={name}
      {...props}
    />
  );
};

export default Input;
