import React from 'react'
import { useCategory } from '../../contexts/CategoryContext'
import logo_home_page from "../../assets/logo_home_page.png";
import logo_home_page_right from "../../assets/logo_home_page_right.png";

const Content = () => {
    const { data } = useCategory()
    return (
        <> 
            {
                data.map((word, index) => (

                    <div key={index}>
                        <div className="flex flex-wrap gap-10 justify-between m-8 ">
                            {/* <div className='border border-red-800 gap-7 p-6'>
                                <div className="chat chat-start">
                                    <div className="w-10 rounded-full">
                                        <img src={logo_home_page_right} className='w-14 md:w-20 rounded-full me-3' alt="Logo" />
                                    </div>
                                    <div className="chat-bubble bg-[#8CCFB0]">{word.word}</div>
                                </div>
                                <div className="chat chat-end">

                                    <div className="chat-bubble bg-[#5C96E7]">{word.wordTranslate}</div>
                                    <div className="w-10 rounded-full">
                                        <img src={logo_home_page} className='w-14 md:w-20 rounded-full me-3' alt="Logo" />
                                    </div>
                                </div>
                                <div className="chat chat-start">
                                    <div className="w-10 rounded-full">
                                        <img src={logo_home_page_right} className='w-14 md:w-20 rounded-full me-3' alt="Logo" />
                                    </div>
                                    <div className="chat-bubble bg-[#8CCFB0]">{word.sentence}</div>
                                </div>
                                <div className="chat chat-end">
                                    <div className="chat-bubble bg-[#5C96E7]">{word.sentenceTranslate}</div>
                                    <div className="w-10 rounded-full">
                                        <img src={logo_home_page} className='w-14 md:w-20 rounded-full me-3' alt="Logo" />
                                    </div>
                                </div>
                            </div> */}

                            <div className="card w-96 bg-base-100 shadow-xl ">
                                <div className="card-body">
                                    <div className='  gap-7 p-6'>
                                        <div className="chat chat-start">
                                            <div className="w-10 rounded-full">
                                                <img src={logo_home_page_right} className='w-14 md:w-20 rounded-full me-3' alt="Logo" />
                                            </div>
                                            <div className="chat-bubble bg-[#8CCFB0]">{word.word}</div>
                                        </div>
                                        <div className="chat chat-end">

                                            <div className="chat-bubble bg-[#5C96E7]">{word.wordTranslate}</div>
                                            <div className="w-10 rounded-full">
                                                <img src={logo_home_page} className='w-14 md:w-20 rounded-full me-3' alt="Logo" />
                                            </div>
                                        </div>
                                        <div className="chat chat-start">
                                            <div className="w-10 rounded-full">
                                                <img src={logo_home_page_right} className='w-14 md:w-20 rounded-full me-3' alt="Logo" />
                                            </div>
                                            <div className="chat-bubble bg-[#8CCFB0]">{word.sentence}</div>
                                        </div>
                                        <div className="chat chat-end">
                                            <div className="chat-bubble bg-[#5C96E7]">{word.sentenceTranslate}</div>
                                            <div className="w-10 rounded-full">
                                                <img src={logo_home_page} className='w-14 md:w-20 rounded-full me-3' alt="Logo" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card w-96 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <div className='  gap-7 p-6'>
                                        <div className="chat chat-start">
                                            <div className="w-10 rounded-full">
                                                <img src={logo_home_page_right} className='w-14 md:w-20 rounded-full me-3' alt="Logo" />
                                            </div>
                                            <div className="chat-bubble bg-[#8CCFB0]">{word.word}</div>
                                        </div>
                                        <div className="chat chat-end">

                                            <div className="chat-bubble bg-[#5C96E7]">{word.wordTranslate}</div>
                                            <div className="w-10 rounded-full">
                                                <img src={logo_home_page} className='w-14 md:w-20 rounded-full me-3' alt="Logo" />
                                            </div>
                                        </div>
                                        <div className="chat chat-start">
                                            <div className="w-10 rounded-full">
                                                <img src={logo_home_page_right} className='w-14 md:w-20 rounded-full me-3' alt="Logo" />
                                            </div>
                                            <div className="chat-bubble bg-[#8CCFB0]">{word.sentence}</div>
                                        </div>
                                        <div className="chat chat-end">
                                            <div className="chat-bubble bg-[#5C96E7]">{word.sentenceTranslate}</div>
                                            <div className="w-10 rounded-full">
                                                <img src={logo_home_page} className='w-14 md:w-20 rounded-full me-3' alt="Logo" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card w-96 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <div className='  gap-7 p-6'>
                                        <div className="chat chat-start">
                                            <div className="w-10 rounded-full">
                                                <img src={logo_home_page_right} className='w-14 md:w-20 rounded-full me-3' alt="Logo" />
                                            </div>
                                            <div className="chat-bubble bg-[#8CCFB0]">{word.word}</div>
                                        </div>
                                        <div className="chat chat-end">

                                            <div className="chat-bubble bg-[#5C96E7]">{word.wordTranslate}</div>
                                            <div className="w-10 rounded-full">
                                                <img src={logo_home_page} className='w-14 md:w-20 rounded-full me-3' alt="Logo" />
                                            </div>
                                        </div>
                                        <div className="chat chat-start">
                                            <div className="w-10 rounded-full">
                                                <img src={logo_home_page_right} className='w-14 md:w-20 rounded-full me-3' alt="Logo" />
                                            </div>
                                            <div className="chat-bubble bg-[#8CCFB0]">{word.sentence}</div>
                                        </div>
                                        <div className="chat chat-end">
                                            <div className="chat-bubble bg-[#5C96E7]">{word.sentenceTranslate}</div>
                                            <div className="w-10 rounded-full">
                                                <img src={logo_home_page} className='w-14 md:w-20 rounded-full me-3' alt="Logo" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <div className='  gap-7 p-6'>
                                        <div className="chat chat-start">
                                            <div className="w-10 rounded-full">
                                                <img src={logo_home_page_right} className='w-14 md:w-20 rounded-full me-3' alt="Logo" />
                                            </div>
                                            <div className="chat-bubble bg-[#8CCFB0]">{word.word}</div>
                                        </div>
                                        <div className="chat chat-end">

                                            <div className="chat-bubble bg-[#5C96E7]">{word.wordTranslate}</div>
                                            <div className="w-10 rounded-full">
                                                <img src={logo_home_page} className='w-14 md:w-20 rounded-full me-3' alt="Logo" />
                                            </div>
                                        </div>
                                        <div className="chat chat-start">
                                            <div className="w-10 rounded-full">
                                                <img src={logo_home_page_right} className='w-14 md:w-20 rounded-full me-3' alt="Logo" />
                                            </div>
                                            <div className="chat-bubble bg-[#8CCFB0]">{word.sentence}</div>
                                        </div>
                                        <div className="chat chat-end">
                                            <div className="chat-bubble bg-[#5C96E7]">{word.sentenceTranslate}</div>
                                            <div className="w-10 rounded-full">
                                                <img src={logo_home_page} className='w-14 md:w-20 rounded-full me-3' alt="Logo" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>





                    </div>


                ))
            }


        </>
    )
}

export default Content
