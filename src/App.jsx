import { BrowserRouter, Routes,Route } from "react-router-dom";

import { Dashboard, Navbar, ObjectDetection,ChatAi} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-primary'>
        {/* <div className=' bg-cover bg-no-repeat bg-center'> */}
          <Navbar/> 
          <Routes>     
            <Route exact path="/" element={<Dashboard/>} />
            <Route exact path='/chatai' element={<ChatAi/>} />
            <Route exact path="/object_detection" element={<ObjectDetection />} />
        
          </Routes>
    
      </div>
    </BrowserRouter>
  );
}

export default App;