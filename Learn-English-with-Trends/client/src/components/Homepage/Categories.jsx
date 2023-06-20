import React, { useRef, useState } from 'react'
import { useCategory } from '../../contexts/CategoryContext'
import { useNavigate } from 'react-router-dom'

const Categories = () => {

    const { categories, getWords } = useCategory()
    const [activeCategory, setActiveCategory] = useState("none")
    const navigate = useNavigate()
    const ulRef = useRef()


    const handleClick = (category) => {
        setActiveCategory(category)
        getWords(category)
        navigate(`/${category}`)
        ulRef.current.classList.add("hidden")
    }

    const handleLabel = () => {
        ulRef.current.classList.remove("hidden")
    }

    return (
        <>

            <div className="navbar text-white md:h-24 sticky top-24 z-[500] max-[1099px]:flex hidden">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost ">
                            <label className="btn glass text-white " onClick={() => handleLabel()}>Kategoriler</label>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-y-2 " ref={ulRef}>
                            {
                                categories.map((category, index) => (
                                    <li key={index}>
                                        <a className={`${activeCategory === category ? "bg-[#C83540] border-none text-white" : ""} text-black btn-ghost border-b-4 border-main-color main-powder-pink m-3 p-2`} onClick={() => handleClick(category)}>{category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
                                        </a>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>

                </div>
            </div>

            <aside className='min-[1100px]:flex hidden mx-5 pt-5 '>
                <ul className="menu bg-base-100 w-56 p-2 rounded-box">
                {
                                categories.map((category, index) => (
                                    <li key={index}>
                                        <a className={`${activeCategory === category ? "bg-[#C83540] border-none text-white" : ""} text-black btn-ghost border-b-4 border-main-color main-powder-pink m-3 p-2`} onClick={() => handleClick(category)}>{category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
                                        </a>
                                    </li>
                                ))
                            }
                </ul>
            </aside>
        </>
    )
}

export default Categories
