import React from 'react'
import HomeNav from '../components/HomeNav'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from '../features/UserSlice';
import  { BsFillLightningChargeFill , BsFileEarmarkImage , BsCursorFill} from 'react-icons/bs'
function Messaging() {
    const dispatch = useDispatch();
    const users = useSelector((store) => store.user.users);
    const messages = useSelector((store) => store.message.messages);
    const selectedUser = useSelector((store) => store.user.selected)
    

    const getClass = (sent) => {
        if (sent) {
          return "flex mt-3 bg-[#00008B] w-[45%]  rounded-b-[1.3rem]  p-2 mr-10  mt-4 flex-start overflow-wrap break-all text-white   mx-auto justify-end";
        } else {
          return "flex  bg-[white] rounded-b-[1.3rem]   bg-[#EBEDEF]   p-2  flex flex-end w-[45%] mt-4 overflow-wrap  break-all   text-start";
        }
      };

  return (
    <div className='h-screen'>
        <div>
        <HomeNav />
        </div>
        <div  className='grid  h-[90%] w-[100%]  items-center'>
        <div className=' mx-auto flex border h-[90%] w-[50%]'>
            <div className='w-[40%] overflow-y-scroll flex flex-col space-y-4 h-[100%] border'>
                <div className='border-b p-4 fixed bg-white w-[19.6%] h-[10%]'>
                    <p className='font-bold'>Thecoder k</p>
                </div>
            {users.map((post, index) => (
                    <div key={index} onClick={() =>{
                        dispatch(setSelectedUser(post))
                        console.log(selectedUser)                    }} className='w-[100%]  border hover:bg-[#EBEDEF] hover:border-0  p-4 h-[100%] mx-auto'>
                    <div className='w-[100%] h-[100%] space-x-6 flex'>
                            <img className="w-[16%] h-[5vh] border-black border-[0.2rem] border   rounded-full" src={post.userImage}/>
                            <p>{post.userName}</p>
                        </div>
                    </div>
                    ))}
            </div>
            <div className='w-[60%] overflow-y-scroll border h-[100%]'>
                <div className='w-[100%] p-4 flex flex-col space-y-4  mx-auto'>
                    <div>
                    <div className='w-[29%]  items-center p-2 fixed  bg-white -translate-y-[27%] border-b   h-[10%]  space-x-6 flex'>
                            <img className="w-[10%] h-[5vh] border-black border-[0.2rem] border   rounded-full" src={selectedUser.userImage}/>
                            <p>{selectedUser.userName}</p>
                    </div>
                    <div className='w-[100%]  border hover:bg-[#EBEDEF] hover:border-0  p-4 h-[100%] mx-auto'>
                    </div>
                    </div>
                {messages.map((mes, index) => (
                    <div  className={getClass(mes.sent)} key={index}>
                        <p>{mes.message}</p>
                    </div>
                ))}
                </div>
            <div className='bg-white border w-[30%]   p-4 h-[8vh] fixed bottom-0'>
                   <div className='w-[90%] text-center h-[90%] flex mx-auto'>
                    <div className='flex items-center text-[1.5rem] space-x-3 w-[20%]'> 
                        <BsFileEarmarkImage />
                        <BsFillLightningChargeFill />

                    </div>
                    <div className='w-[80%]'>
                    <input className='border text-black p-2 focus:outline-0  w-[80%] h-[90%]' type="text"  placeholder='chart with 'valens/>
                    <button className='w-[20%] text-center text-[#00008B] border translate-y-1 font-bold  hover:bg-[#00008B] hover:text-white px-4 text-[1.5rem]   h-[90%] '><BsCursorFill /></button>
                    </div>
                   </div>
            </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Messaging