import React, {useState} from 'react';
import axios from 'axios';

const Food = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const[food, setFood] = useState('')
    const onImageChange = (event) => {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
      const file = event.target.files[0];
      const data = new FormData();
      data.append("fileFood",file,"fileFood");
      axios.post('http://localhost:8080/food', data).then(response => { 
         setFood(response.data[0]['label'])
         console.log(food)
      })
  
    }
  
    return (
      <div className="h-screen ">
          <div className="absolute inset-0 top-[120px] mx-auto w-full flex flex-col items-center sm:flex-row gap-10" >
  
              <div className=" p-3 w-full sm:w-1/2 h-full justify-center items-center">
                  <div className="h-full border-dotted border-4 border-indigo-600 p-11 w-full flex flex-col gap-3 items-center justify-center">
                    {!selectedImage?
                    <label>
                            <div className="flex flex-col items-center justify-center h-full">
                                <div className="flex flex-col justify-center items-center gap-2">
                                    <p>
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" >
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                    </svg>
                                    </p>
                                    <p className="text-lg">Click to upload</p>
                                </div>
                                <p className="mt-32 text-secondary">
                                  Recommendation: Use high-quality JPG, JPEG, SVG, PNG, GIF or TIFF less than 20MB
                                </p>
                            </div>
                            <input
                              type="file"
                              name="upload-image"
                              onChange={onImageChange}
                              // className="w-0 h-0"
                            />
                      </label>
                      : <div className='relative h-full'>
                          <img className="w-full h-full object-contain" src={selectedImage} alt="image" />
                          <button className="absolute bottom-3 right-3 " type="submit" onClick={()=>setSelectedImage(null)}>
                            <svg className="w-10 h-10 p-1 bg-white rounded-full stroke-blue-500 hover:w-11 hover:h-11" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" >
                              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                          </button>
                        </div>
                    }
                  </div>
              </div>
              
              <div  className="p-3 w-full  sm:w-1/2 h-full flex justify-center items-center">
                    <h1>{food}</h1>
              </div> 
  
          </div>
   
      </div>
    )
}

export default Food;