import About from "./About";
import Process from "./Process";
import Intro from './Intro';
const Dashboard = () => {
  return (
  <>
    <div className="h-screen bg-primary ">
      <Intro />
    </div>
    <div className="h-screen bg-tertiary">
      <About/>
    </div>
    <div className="h-screen bg-primary">
      <Process/>
    </div>
  </>
  )
}

export default Dashboard
