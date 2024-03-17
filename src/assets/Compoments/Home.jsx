import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { panierset, prixset  } from '../Reducers/Panier';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Home(props) {
    const dispatch = useDispatch();
    const panier = useSelector((state) => state.panier)
    const [pizza, setpizza] = useState(props.data)
    const [idgood, setidgood] = useState()

    function setlesenroulles(Element) {
        dispatch(panierset(Element.name))
        dispatch(prixset(Element.price)) 
    }
    function sortedpizza(element) {
        setpizza([...pizza].sort((a, b) =>  b.price - a.price))
         
    }
    function lowsortedpizza(element) {
        setpizza([...pizza].sort((a, b) =>  a.price - b.price))
        
    }
    
    const chercherIndex = (element) => {
        const idd = pizza.findIndex((pizza) => pizza.name.toLowerCase() === element.toLowerCase());
        return idd;
    };
    
    
    return (
        <div className=' w-screen h-screen relative flex flex-col items-center  '>
            <Navbar></Navbar>
            <div className='w-[90rem] h-[60rem]  flex justify-center items-center '>
                <div className='w-[90rem] gap-16 z-30 h-[50rem] flex flex-wrap justify-center items-center rounded-xl '>
                    {
                        pizza.map((Element,id)=>{
                            return(
                                <div  className=" card w-96 h-[350px] bg-base-100 shadow-xl">
                                <figure className='h-[30rem]'>
                                    <div onClick={()=>{setlesenroulles(Element)}} className='cursor-pointer h-[40px] w-[90px] rounded-2xl top-6 text-xl left-4 bg-black absolute hover:bg-[#DA291C] text-white flex items-center justify-center'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>{Element.price} €</div>
                                    <img className='h-[150%] pt-2' src={Element.img} alt="Shoes" />
                                </figure>
                                <Link  to={`/Details/${Element.id}`}>
                                <div className="card-body h-[6rem] hover:bg-black rounded-b-xl hover:text-white flex justify-center items-center">
                                    <h2 className="card-title text-center text-2xl">{Element.name}</h2>
                                </div>
                                </Link>
                                </div> 
                            )
                        })
                    }
                </div>
            </div>
            <div className="dropdown me-4 dropdown-end absolute right-[5rem] top-5">
                    <div tabIndex={0} role="button" className="btn btn-ghost w-20 btn-circle avatar">
                        <p className='text-2xl'>Price</p>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={()=>{sortedpizza()}}><a>High</a></li>
                        <li onClick={()=>{lowsortedpizza()}}><a>Low</a></li>
                    </ul>
            </div>
        </div>
    )
}
