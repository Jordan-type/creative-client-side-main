const InputField = ({icon,placeholder,name,type,onChange}) => {
  return (
    <div className="bg-[#EAEFFF] border-2 flex items-center gap-x-2 border-inputBorderColor rounded-lg w-[400px] px-2 py-3">
        {icon}
        <input name={name} onChange={onChange} type={type} className="bg-transparent outline-none border-none w-full" placeholder={placeholder} />
    </div>
  )
}
export default InputField