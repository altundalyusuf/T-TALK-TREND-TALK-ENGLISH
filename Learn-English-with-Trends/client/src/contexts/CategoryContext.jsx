import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";


const CategoryContext = createContext()

export const CategoryContextProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [question, setQuestion] = useState({});
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [answers, setAnswers] = useState([]);



    const getQuestions = async () => {
        try {
            const { data: response } = await axios.get("http://localhost:8080/api/word")
            setQuestions(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    const nextQuestion = () => {
        let usedAnswers = []
        const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        setQuestion(randomQuestion)
        setCorrectAnswer(randomQuestion.wordTranslate);
        const correctAnswerVariable = randomQuestion.wordTranslate


        setAnswers([])
        setAnswers(prev => [...prev, correctAnswerVariable])
        usedAnswers = [correctAnswerVariable]
        for (let i = 0; i < 3;) {
            const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
            let wrongAnswer = randomQuestion.wordTranslate
            if (!usedAnswers.includes(wrongAnswer)) {
                setAnswers(prev => [...prev, wrongAnswer])
                usedAnswers.push(wrongAnswer);
            }
            else {
                continue;
            }
            i++;
        }
    }

    const getWords = async (category) => {
        try {
            const { data: response } = await axios.get("http://localhost:8080/api/word")
            setData([])
            response.data.forEach(word => {
                if (word.category === category) {
                    setData(prev => [...prev, word])
                }

            })

        } catch (error) {
            console.log(error)
        }
    }

    const getCategories = async () => {
        try {
            const { data: response } = await axios.get("http://localhost:8080/api/category")
            const categoryData = response.data[0].category
            const temp = []
            categoryData.forEach(element => {
                temp.push(element)
            })
            setCategories(temp)
            setLoading(false);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCategories()
    }, [])

    const values = {
        categories,
        loading,
        data,
        getWords,
        getQuestions,
        questions,
        question,
        setQuestion,
        correctAnswer,
        setCorrectAnswer,
        answers,
        setAnswers,
        nextQuestion,
    }
    return (
        <CategoryContext.Provider value={values}>
            {children}
        </CategoryContext.Provider>
    )
}

export const useCategory = () => {
    const context = useContext(CategoryContext)
    if (context === undefined) {
        throw new Error("useCategory must be used within a CategoryContextProvider!")
    }
    return context
}