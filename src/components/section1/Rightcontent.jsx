import Rightcard from "./Rightcard"


const Rightcontent = (props) => {
  
  return (
    <div className="h-full flex flex-nowrap gap-8 shrink-0 overflow-x-auto rounded-4xl p-6 w-2/3">
      {props.users.map(function(elem, idx) {
        return <Rightcard key = {idx} id = {idx} img = {elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default Rightcontent