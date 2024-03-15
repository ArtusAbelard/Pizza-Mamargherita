import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useSelector, useDispatch } from 'react-redux';
import { panierremove , prixremove } from '../Reducers/Panier';
import { useState } from 'react';


export default function Panier(props) {
    const panier = useSelector((state) => state.panier)
    const dispatch = useDispatch();
    const [idpanier, setidpanier] = useState([])
    function remove(Element) {
        setidpanier(panier.panier.indexOf(Element))
        dispatch(panierremove(idpanier))
        dispatch(prixremove(idpanier))
    }

    const panierr = panier.prix;
    const somme = panierr.reduce((acc, valeur) => acc + valeur, 0);

    return (
        <div className='w-[100%] overflow-x-hidden min-h-[100dvh] flex flex-col items-center '>
            <Navbar></Navbar>
            <div className='pt-10 w-full min-h-[30rem] panierbg flex items-center justify-center'>
                <div className='bg-white ewa w-[40rem] min-h-[52.4rem] mb-4 gap-5 rounded-3xl flex flex-col justify-center items-center'>
                    <h1 className='text-7xl font-bold '>Card</h1>
                    <div className='font-bold text-3xl flex justify-center items-center bg-[#DA291C] rounded-xl w-[10rem] h-[3rem]'>Total : €<span>{somme}</span></div>
                    {
                        panier.panier.map((Element,id)=>{
                            return(
                                <div className='w-[35rem] mb-5 font-bold h-[6rem] gap-5 bg-[#DA291C] flex items-center  rounded-3xl'>
                                    <p className='ps-5 text-xl w-[15rem] text-white'><span className='text-black'>Pizza : </span>{Element}</p>
                                    <p className='font-bold text-2xl'>€{panier.prix[id]}</p>
                                    <button onClick={()=>{remove(Element)}} className="btn absolute right-[45rem] text-xl">Remove</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
