import React, { useRef, useState } from 'react'
import let_me_talk from "../../assets/let_me_talk.gif";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    // veritabanına kaydedilecekler
    const [registerData, setRegisterData] = useState({
        registerName: '',
        email: '',
        password: '',
    });
    // şifreyi tekrar girin kısmını karşılaştırabilmek için 
    const [verifyPassword, setVerifyPassword] = useState('');
    // hata olduğunda div'in içine erişmek için referans
    const errorRef = useRef();

    // input değerleri değiştiğinde kaydet
    const onChangeFunc = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    }
    // şifreyi tekrar girin inputunu değiştiğinde kaydet
    const onVerify = (e) => {
        setVerifyPassword(e.target.value)
    }

    // // Kayıt fonksiyonu
    const registerFunc = async (e) => {
        e.preventDefault();
        errorRef.current.innerHTML = "";
        try {
            if (verifyPassword == registerData.password) {
                const url = "http://localhost:8080/api/register";
                const { data: res } = await axios.post(url, registerData);
                setRegisterData({
                    registerName: "",
                    email: "",
                    password: ""
                })
                setVerifyPassword("");
                console.log(res.message);
                showSuccessFunc();
            }
            else if (verifyPassword !== registerData.password)
                showErrorFunc();

        } catch (error) {
            showErrorFunc(error)
        }
    }

    // Başarı ile kayıt oldu uyarısı
    const showSuccessFunc = () => {
        errorRef.current.innerHTML = `
        <div class="alert alert-success shadow-sm">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Hesabınız başarı ile oluşturuldu!</span>
            </div>
        </div>
            `
    }
    // Kayıt hataları için uyarılar
    const showErrorFunc = (error) => {
        const errorMessage = (message) => (
            `
            <div class="alert alert-error shadow-sm">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>${message}</span>
            </div>
          </div>
            `
        )
        if (verifyPassword !== registerData.password)
            errorRef.current.innerHTML = errorMessage('Girdiğiniz şifreler aynı değil!')
        else if (error.response.data.message == '"Name" is not allowed to be empty')
            errorRef.current.innerHTML = errorMessage('İsim alanı boş bırakılamaz.');
        else if (error.response.data.message == '"Email" is not allowed to be empty')
            errorRef.current.innerHTML = errorMessage('Email alanı boş bırakılamaz.');
        else if (error.response.data.message == '"Email" must be a valid email')
            errorRef.current.innerHTML = errorMessage('Email adresi hatalı.');
        else if (error.response.data.message == '"Password" is not allowed to be empty')
            errorRef.current.innerHTML = errorMessage('Şifre alanları boş bırakılamaz.');
        else if (error.response.data.message == '"Password" should be at least 8 characters long')
            errorRef.current.innerHTML = errorMessage('Şifreniz en az 8 karakterden oluşmalıdır.');
        else if (error.response.data.message == '"Password" should contain at least 1 lower-cased letter')
            errorRef.current.innerHTML = errorMessage('Şifreniz en az 1 küçük harf içermelidir.');
        else if (error.response.data.message == '"Password" should contain at least 1 upper-cased letter')
            errorRef.current.innerHTML = errorMessage('Şifreniz en az 1 büyük harf içermelidir.');
        else if (error.response.data.message == '"Password" should contain at least 1 symbol')
            errorRef.current.innerHTML = errorMessage('Şifreniz en az 1 sembol içermelidir.');
        else if (error.response.data.message == '"Password" should contain at least 1 lower-cased letter')
            errorRef.current.innerHTML = errorMessage('Şifreniz en az 1 küçük harf içermelidir.');
        else
            errorRef.current.innerHTML = errorMessage(error.response.data.message);

    }

    return (
        <>
            <div className="flex min-h-full items-center justify-center px-4 py-6">
                <div className="w-full max-w-md">
                    <div>
                        <img
                            className="mx-auto w-36 md:w-40 h-auto rounded-tl-full rounded-tr-full"
                            src={let_me_talk}
                            alt="register gif"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-primary">
                            Hesap Oluştur
                        </h2>
                    </div>
                    <form className='mt-3' method="POST">
                        <div>
                            <div className='mb-2'>
                                <label htmlFor="registerName" className="block text-sm font-medium leading-6 text-gray-900">
                                    Ad ve Soyad
                                </label>
                                <input
                                    id="registerName"
                                    name="registerName"
                                    type="text"
                                    autoComplete="registerName"
                                    value={registerData.registerName}
                                    onChange={onChangeFunc}
                                    required
                                    className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Ad ve Soyad"
                                />
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
                                    E-Posta
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={registerData.email}
                                    onChange={onChangeFunc}
                                    required
                                    className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="E-Posta"
                                />
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Şifre
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    value={registerData.password}
                                    onChange={onChangeFunc}
                                    required
                                    className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Şifre"
                                />
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="verifyPassword" className="block text-sm font-medium leading-6 text-gray-900">
                                    Şifreyi Tekrar Gir
                                </label>
                                <input
                                    id="verifyPassword"
                                    name="verifyPassword"
                                    type="password"
                                    autoComplete="current-password"
                                    value={verifyPassword}
                                    onChange={onVerify}
                                    required
                                    className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Şifreyi Tekrar Gir"
                                />
                            </div>
                        </div>

                        <div ref={errorRef}></div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                Zaten bir hesabın var mı?
                            </div>

                            <div className="text-sm">
                                <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Giriş Yap
                                </Link>
                            </div>
                        </div>


                        <div className='mt-3'>
                            <button
                                type="button"
                                onClick={registerFunc}
                                className="transition ease-in  active:-translate-y-1 active:scale-90  duration-200 group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Kaydol
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        </>
    )
}

export default Register
