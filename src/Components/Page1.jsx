import { useContext } from "react"
import { dataContext } from "./Home"

const Page1 = () => {
  const data = useContext(dataContext)
  return (
    <>
        <div>page1</div>
        <h2>{data}</h2>
    </>
  )
}

export default Page1