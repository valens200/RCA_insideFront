import React from 'react'
import ReactDOM from 'react-dom';

function Chart() {
  return  ReactDOM.createPortal(<div className='h-[80vh] bg-black  border  absolute -translate-y-[90vh]  w-[70%] mx-auto'>
    <div className='w-[40%] h-[100%] border'>

    </div>
    <div className='w-[60%] h-[100%]'>

    </div>
    </div>, document.getElementById("chart"))
  
}

export default Chart