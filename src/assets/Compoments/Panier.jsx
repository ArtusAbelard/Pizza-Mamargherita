import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useSelector, useDispatch } from 'react-redux';
import { panierremove } from '../Reducers/Panier';
import { useState } from 'react';





export default function Panier(props) {
    const panier = useSelector((state) => state.panier)
    const dispatch = useDispatch();
    // console.log(panier.panier);
    // console.log(panier.panier.indexOf("Bruxelloise"));
    
    const [idpanier, setidpanier] = useState([])
    function remove(Element) {
        setidpanier(panier.panier.indexOf(Element))
        dispatch(panierremove(idpanier))
        
    }

    useEffect(() => {
        console.log(idpanier);
    }, [remove])

    return (
        <div className='w-screen h-screen flex flex-col items-center '>
            <Navbar></Navbar>
            <div className='w-full h-[60rem] panierbg flex items-center justify-center'>
                <div className='bg-white w-[50rem] h-[53rem] gap-5 rounded-3xl flex flex-col justify-center items-center'>
                    <h1 className='text-4xl font-bold '>Card</h1>
                    {
                        panier.panier.map((Element,id)=>{
                            return(
                                <div className='w-[35rem] mb-5 h-[10rem] gap-5 bg-[#DA291C] flex items-center  rounded-3xl'>
                                    <p className='ps-5 text-xl text-white'><span className='text-black'>Pizza : </span>{Element}</p>
                                    <p>price</p>
                                    <button onClick={()=>{remove(Element)}} className="btn absolute right-[45rem]">Remove</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
