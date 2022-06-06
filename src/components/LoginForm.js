import React, { useState } from 'react'

const bgImage = new URL ('./../assets/Background.png', import.meta.url)
const bnLogo = new URL ('./../assets/Bridgenote Logo.png', import.meta.url)



function LoginForm({Login, error}) {
    const [details, setDetails] = useState({username: "", password: ""})
    
    const submitHandler = e => {
        e.preventDefault()
        Login(details)
    }

    return (
        <div style={{backgroundImage: `url(${bgImage})`}} 
            className='w-screen h-screen bg-cover bg-left-top relative sm:p-5 '>
            <div className='block absolute top-1/2 -translate-y-1/2 left-20 w-[370px] bg-white bg-opacity-95 py-8 px-8 rounded-[50px] sm:left-1/2 sm:py-5 sm:px-5 sm:w-[340px] sm:-translate-x-1/2'>
                <form className="" onSubmit={submitHandler}> 
                    <div>

                        <div className='flex relative pb-6 justify-center '>
                            <img src={bnLogo} alt="BridgeNote" className='' />
                        </div>

                        {(error !== "") ? ( <div className='transition-all my-3 bg-white p-3 shadow-2xl rounded-xl'> <span className='text-red-700 font-medium'>{error}</span>  </div> ) : "" }

                        <div className="my-3 pb-2">
                            <input type="text" name='username' id='username' placeholder='username' 
                            onChange={
                                e => setDetails({...details, username: e.target.value})
                            }
                            value={details.username}
                            className='border-b-2 border-[#1f597e] px-2 pb-2 w-full bg-transparent outline-none focus:outline-none focus:border-sky-500 hover:border-sky-500 transition-all'/>
                        </div>
                        <div className="my-5 pb-2">
                            <input type="password" name='password' id='password' placeholder='password'
                            onChange={
                                e => setDetails({...details, password: e.target.value})
                            }
                            value={details.password}
                            className='border-b-2 border-[#1f597e] px-2 pb-2 w-full bg-transparent outline-none focus:outline-none focus:border-sky-500 hover:border-sky-500 transition-all' />
                        </div>
                        <div className='flex justify-between mb-14'>
                            <div className='relative w-1/2 align-middle'>
                                <input type="checkbox" name="save-login" id="save-login" className='form-checkbox h-5 w-5 text-gray-600 align-middle cursor-pointer ' />
                                <label htmlFor="save-login" className='text-slate-400 text-xs inline-block ml-1 align-middle cursor-pointer'> Keep me signed in</label>
                            </div>
                            <div className='align-middle'>
                                <a href="#" className='text-slate-400 text-xs'>Forgot password</a>
                            </div>
                        </div>
                        <div className="my-3 text-center pb-9">
                            <input type="submit" value="LOG IN" className="rounded-2xl border-2 px-8 py-3 bg-[#1f597e] text-white font-semibold tracking-wide cursor-pointer transition-all hover:bg-sky-600"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default LoginForm