const Button = (props) => {
  const { children, classname, onClick = () => {}, type = "button" , disabled = false} = props;
  let { variant = "btn-primary" } = props;

  let hover, text_color;

  if (variant.includes("btn-primary")) {
    variant = "bg-primary-red";
    hover = "hover:bg-red-700";
    text_color = "text-white";
  }else if (variant.includes("btn-success")) {
    variant = "bg-emerald-600";
    hover = "hover:bg-emerald-700";
    text_color = "text-white";
  }else if(variant.includes("btn-warning")) {
    variant = "bg-amber-400";
    hover = "hover:bg-red-700";
    text_color = "text-white";
  }else if(variant.includes("btn-danger")) {
    variant = "bg-red-600";
    hover = "hover:bg-red-700";
    text_color = "text-white";
  }else if(variant.includes("btn-info")) {
    variant = "bg-sky-400";
    hover = "hover:bg-sky-600";
    text_color = "text-white";
  }else if(variant.includes("btn-dark")) {
    variant = "bg-zinc-900";
    hover = "hover:bg-zinc-700";
    text_color = "text-white";
  }else if(variant.includes("btn-outline-primary")) {
    variant = "border border-primary-red";
    hover = "hover:bg-primary-red hover:text-white";
    text_color = "text-primary-red";
  }else if(variant.includes("btn-outline-secondary")) {
    variant = "border border-stone-400";
    hover = "hover:bg-stone-400 hover:text-white";
    text_color = "text-stone-700";
  }

  if (variant.includes('btn-block')){
    variant += " w-full";
  }else{
    variant += " w-2/3";
  }

  if(disabled){
    variant = "cursor-not-allowed border border-stone-400 bg-stone-400";
    hover = "";
    text_color = "text-white";
  }

  return (
    <button
      className={`${variant} ${hover} ${text_color} ${classname} font-bold py-2 px-4 rounded h-12 `}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
