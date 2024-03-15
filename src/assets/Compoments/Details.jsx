import React from 'react'
import Navbar from './Navbar'
import data from './../../../public/Json/data.json'
import { useParams } from 'react-router-dom';
import logo from './../img/OIG1.jpeg'
import { useSelector ,useDispatch } from 'react-redux';
import { panierset } from '../Reducers/Panier';

export default function Details(props) {
    const {id} = useParams();
    const dispatch = useDispatch();
    const panier = useSelector((state) => state.panier)
    console.log(panier);
    
    return (
            <div className='details w-[100%] h-screen flex flex-col items-center overflow-hidden bg-slate-700 relative'>            
            <Navbar></Navbar>
            <div className='ewa overflow-hidden h-[50rem] w-[90rem] bg-white flex flex-col items-center justify-center mt-11 rounded-3xl z-50'>
                <h1 className='text-black txtname font-bold text-6xl pb-5 '>{data[id].name}</h1>
                <div className='w-full h-4/6  flex'>
                    <div className='w-1/2 h-full  flex '>
                        <div className='w-1/2 h-full flex flex-col justify-center items-center'>
                        <div className='w-[70%] h-[60%] bg-[#DA291C] rounded-xl flex flex-col justify-center'>
                        <h5 className='text-3xl pb-5 ps-10 text-white'>Ingredients :</h5>
                        <ul className='gap-2 flex flex-col text-white'>
                            {
                                data[id].topping.map((Element,index)=>{
                                    return(
                                        <li className='ps-10 text-xl'>-{Element}</li>
                                    )
                                })
                            }
                        </ul>
                        </div>
                        </div>
                        <div className='w-1/2 h-full  flex justify-center items-center'>
                            <img className='rounded-full' src={logo} alt="" />
                            
                        </div>
                    </div>
                    <div className='w-1/2 h-full flex justify-center items-center overflow-hidden '>
                        <img className='w-[40rem] h-[40rem] rounded-full' src={data[id].img} alt="" />
                        <div onClick={()=>{dispatch(panierset(data[id].name))}} className='w-[10rem] h-[5rem] rounded-xl hover:bg-[#DA291C] cursor-pointer bg-black  absolute flex items-center justify-center text-3xl text-white'>{data[id].price} €</div>
                    </div>
                </div>
            </div>
            <div className='h-[800px] w-[800px] absolute rounded-full -left-[22%] top-[15%]'>
                <img className='pizzdetails h-full w-full bg-black rounded-full' src={data[id].img} alt="" />
            </div>
        </div>
    )
}
