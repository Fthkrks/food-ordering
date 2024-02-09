const Title = ({children, classname}) => {
  return (
    <div className={`${classname} font-dancing font-bold`}>{children}</div>
  )
}

export default Title