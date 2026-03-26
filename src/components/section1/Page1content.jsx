import Leftcontent from "./leftcontent"
import Rightcontent from "./rightcontent"


const Page1content = () => {
  return (
    <div className="py-10 px-18 flex items-center gap-10 h-[90vh]">
        <Leftcontent />
        <Rightcontent />
    </div>
  )
}

export default Page1content