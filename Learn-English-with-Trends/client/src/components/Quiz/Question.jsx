import React, { useEffect, useRef, useState } from 'react'
import { useCategory } from '../../contexts/CategoryContext'
import { useNavigate } from 'react-router'

const Question = () => {

    const { getQuestions, question, correctAnswer, answers, nextQuestion } = useCategory()

    const [modal, setModal] = useState(false)

    const options = ['A', 'B', 'C', 'D']

    const navigate = useNavigate();


    const handleExit = () => {
        // 1 sayfa geri dön
        navigate(-1)
    }
    const handleClick = (e) => {

        if (e.target.nextSibling.innerHTML === correctAnswer) {
            nextQuestion();
        }
        else {
            // Buraya bir pop-up / modal gelecek ve kelimeyi yanlış bildiğimizi gösterecek.
            setModal(true)
        }


    }

    useEffect(() => {
        getQuestions()
    }, [])
    return (
        <>
            {/* 5 kelime soran for döngüsü, 5 cümle soran for döngüsü eklenecek */}
            <div className='h-screen bg-black pt-10 '>
                <div className='bg-main-color flex justify-center items-center p-5 mx-20 h-[90%] rounded-lg '>
                    <div className="card w-[75%] h-[75%]  bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title mb-2">Aşağıda yer alan kelimenin anlamı nedir?</h2>
                            <h2 className="card-title font-bold mb-2 border-b-2 hover:text-lime-400 hover:cursor-pointer">{question.word}</h2>
                            {/* Şıkları rastgele çekmesi için sort ediyoruz */}
                            {answers.sort(() => Math.random() - 0.5).map((answer, index) => (
                                <div key={index}>
                                    <div>
                                        <label htmlFor={modal ? "my-modal-6" : ""} onClick={handleClick} className="btn btn-circle btn-secondary active:bg-red-600 hover:bg-red-600 me-2">
                                            {options[index]})
                                        </label>
                                        <span>{answer}</span>
                                    </div>
                                    {/* <button onClick={handleClick} className="btn btn-secondary">
                                        {options[index]})&nbsp; <span>{answer}</span>
                                    </button> */}
                                </div>
                            ))}
                            <div className="card-actions justify-end">
                                <button onClick={handleExit} className="btn btn-primary">Testi Bitir</button>
                            </div>
                        </div>
                    </div>
                    {/* **************************************************** */}
                    {
                        // Sayfa yenilendiğinde veriler gecikmeli geldiği için state'ler boş oluyor ve uygulama patlıyor.
                        // Bu yüzden burada bu kontrolü yapıyoruz.
                        question.word &&
                        // {/* MODAL */ }
                        <div>
                            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                            <div className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg text-error">Doğru cevap: {correctAnswer}</h3>
                                    <p className="py-4"><span className='text-success'>"{question.word.toUpperCase()}"</span> kelimesinin karşılığı <span className='text-success'>"{correctAnswer.toLocaleUpperCase('tr-TR')}"</span> kelimesidir.</p>
                                    <div className="modal-action">
                                        <label htmlFor="my-modal-6" onClick={() => setModal(false)} className="btn btn-square">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        // {/* ********************************************************* */}
                    }
                </div>
            </div>





        </>
    )
}


export default Question
