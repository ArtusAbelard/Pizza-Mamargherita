import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { panierset, prixset  } from '../Reducers/Panier';
import { useSelector, useDispatch } from 'react-redux';

export default function Home(props) {
    const dispatch = useDispatch();
    const panier = useSelector((state) => state.panier)
    console.log(panier.prix);
    // add = function(arr) {
    //     return arr.reduce((a, b) => a + b, 0);
    // };
    
    // const panierr = panier.prix;
    // const somme = panierr.reduce((acc, valeur) => acc + valeur, 0);
    // console.log(somme); // Affiche 11

    function setlesenroulles(Element) {
        dispatch(panierset(Element.name))
        dispatch(prixset(Element.price)) 
    }

    // const {id} = useParams();
    return (
        <div className=' w-screen h-screen   flex flex-col items-center  '>
            <Navbar></Navbar>
            <div className='w-[90rem] h-[60rem]  flex justify-center items-center '>
                <div className='w-[90rem] gap-16 z-30 h-[50rem] flex flex-wrap justify-center items-center rounded-xl '>
                    {
                        props.data.map((Element,id)=>{
                            return(
                                <div key={id} className=" card w-96 h-[350px] bg-base-100 shadow-xl">
                                <figure className='h-[30rem]'>
                                    <div onClick={()=>{setlesenroulles(Element)}} className='cursor-pointer h-[40px] w-[90px] rounded-2xl top-6 text-xl left-4 bg-black absolute hover:bg-[#DA291C] text-white flex items-center justify-center'>{Element.price} €</div>
                                    <img className='h-[150%] pt-2' src={Element.img} alt="Shoes" />
                                </figure>
                                <Link to={`/Details/${id}`}>
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

        </div>
    )
}
