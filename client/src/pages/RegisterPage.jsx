import { createContext, useState, useContext } from 'react';
import {useForm} from 'react-hook-form';
import { registerRequest } from '../api/auth';
 
function RegisterPage() {

    const {register, handleSubmit} = useForm();

  return (
    <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
        <form onSubmit={handleSubmit(async(values)=>{
            //console.log(values);
        })}>
            <input type="text" {...register("username",{required:true})} placeholder='username'className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2' />
            <input type="email" {...register("email",{required:true})} placeholder='email' className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2'/>
            <input type="password" {...register("password",{required:true})} placeholder='password' className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2' />
            <button type="submit" className="bg-blue-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">Register</button>
        </form>
    </div>
  )
}

export default RegisterPage
