

const Rightcardcontent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
      <h2 className="h-12 w-12 flex justify-center items-center bg-white text-xl font-semibold rounded-full">
        {props.id+1}
        </h2>
      <div>
        <p className="text-white mb-14 text-xl leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, debitis nemo veritatis reprehenderit aliquid architecto!</p>
        <div className="flex justify-between">
            <button className="bg-blue-500 text-white font-semibold px-7 py-3 rounded-full">{props.tag}</button>
             <button className="bg-blue-500 text-white font-semibold px-4 py-3 rounded-full"><i className="ri-arrow-right-line"></i></button>
        </div>
      </div>
     </div>
  )
}

export default Rightcardcontent