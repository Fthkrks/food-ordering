const Input = (props) => {
  const {placeholder, ...inputProps} = props;
  return (
    <div className="w-full">
        <label className="relative block cursor-text w-full">
            <input type="text" {...inputProps} required 
            className= {`h-14 w-full outline-none border border-primary px-4 peer pt-2 
            ${props.touched && props.errorMessage ? "border-red-500": "border-primary"  }
            ${props.type !== "data" && "pt-2"} `}
            
            />
            <span 
            className="absolute top-0 left-0 px-4 text-sm flex items-center
             h-full peer-focus:h-7 peer-focus:text-xs transition-all peer-valid:h-7 peer-valid:text-xs">
                {props.placeholder}
            </span>
        </label>
        {props.touched && <span className="text-red-500 text-xs">{props.errorMessage}</span>}

    </div>
  )
}

export default Input