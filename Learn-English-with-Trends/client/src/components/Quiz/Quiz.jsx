import React, { useEffect } from 'react'
import t_talk_logo from "../../assets/t-talk-logo.gif"
import { useNavigate } from 'react-router-dom';
import { useCategory } from '../../contexts/CategoryContext';
const Quiz = () => {

    const { getQuestions, nextQuestion } = useCategory()

    const navigate = useNavigate();

    const handleClick = () => {
        // Quiz sayfasında Quize başla butonuna tıklanınca ilk kelimeyi çekebilmek için
        // question state'ini ilk burada dolduruyoruz.
        nextQuestion();

        navigate('questions')
    }


    useEffect(() => {
        getQuestions()
    }, [])

    return (
        <>
            {/* <div className='h-screen bg-main-color'>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={t_talk_logo}   className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">T-TALK</h1>

                            <p className="py-6">T-TALK ile bilgini test et.</p>

                        </div>
                    </div>
                </div>
            </div> */}

            <div className='h-screen bg-black pt-10 '>
                <div className='bg-main-color flex justify-center items-center p-5 mx-20 h-[90%] rounded-lg '>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img src={t_talk_logo} alt="Movie" /></figure>
                        <div className="card-body">
                            <h1 className="card-title">T-TALK</h1>
                            <p>T-TALK ile bilgini test et.</p>
                            <div className="card-actions justify-end">
                                <button onClick={handleClick} className="btn btn-primary">Quize Başla</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Quiz
