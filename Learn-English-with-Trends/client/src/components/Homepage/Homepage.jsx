import React from 'react'
import Categories from './Categories'
import Content from './Content'
import { Navigate, useParams } from 'react-router-dom'
import { useCategory } from '../../contexts/CategoryContext'
import Loading from '../../pages/Loading'
import t_talk_logo from "../../assets/t-talk-logo.gif"

const Homepage = () => {
    const { id } = useParams()
    const { categories, loading } = useCategory()

    const WelcomeDiv = () => {
        return (
            <>
                
                <header className=' flex items-center justify-center  h-screen  min-[1300px]:ml-96'>
                    <div className=' flex flex-col items-center justify-center text-center  text-white'>
                        <h1 className='mb-10 font-bold  text-6xl ' style={{ textShadow: '5px 5px 10px #FF4655' }}>T-TALK'A HOŞGELDİN </h1>
                        <h2 className='mb-3 text-5xl'>İngilizceni geliştirmek için bir kategori seç.</h2>
                        <img
                            className="mx-auto w-36 md:w-40 h-auto rounded-tl-full rounded-tr-full" 
                            src={t_talk_logo}
                            alt="register gif"
                        />
                    </div>
                </header>



            </>
        )
    }

    const ShowContent = () => {
        if (loading) {
            return (
                <>
                    <Loading />
                </>
            )
        }
        return (
            <>
                {categories.includes(id) ? <Content /> : <Navigate to="not-found" replace={true} />}
                
            </>
        )
    }
    return (
        <>
        {/* #F2F2F2  #18191C max-[1350px]*/}
            <div className="h-screen min-[1100px]:flex bg-[#18191C] gap-2 ">
                <div className="">
                    <Categories />
                    
                </div>

                <div className="place-content-center h-screen bg-[#18191C]">

                    {!id ? <WelcomeDiv /> : <ShowContent />}
                </div>

            </div>

        </>
    )
}

export default Homepage


