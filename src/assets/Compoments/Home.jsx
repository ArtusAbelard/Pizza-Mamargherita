import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';



export default function Home(props) {
    
    const {id} = useParams();
    return (
        <div className=' w-screen h-screen   flex flex-col items-center  '>
            <Navbar></Navbar>
            <div className='w-[90rem] h-[60rem]  flex justify-center items-center '>
                <div className='w-[90rem] gap-16 z-30 h-[50rem] flex flex-wrap justify-center items-center rounded-xl '>
                    {
                        props.data.map((Element,id)=>{
                            return(
                                <Link to={`/Details/${id}`}><div className=" card cursor-pointer w-96 h-[350px] bg-base-100 shadow-xl">
                                <figure className='h-[30rem]'>
                                    <div className='h-[40px] w-[90px] rounded-2xl top-6 text-xl left-4 bg-black absolute text-white flex items-center justify-center'>{Element.price} €</div>
                                    <img className='h-[150%] pt-2' src={Element.img} alt="Shoes" />
                                </figure>
                                <div className="card-body h-[6rem] flex justify-center items-center">
                                    <h2 className="card-title text-center ">{Element.name}</h2>
                                    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                                    {/* <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                    </div> */}
                                </div>
                                </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}
