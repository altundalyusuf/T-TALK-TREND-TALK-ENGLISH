import React, { useRef, useState } from "react";
import let_me_talk from "../../assets/let_me_talk.gif";
import t_talk_logo from "../../assets/t-talk-logo.gif"
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const errorRef = useRef();


  const onChangeFunc = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  // // Sign up function
  const loginFunc = async () => {
    errorRef.current.innerHTML = "";
    try {
      const url = "http://localhost:8080/api/login";
      const { data: res } = await axios.post(url, loginData);
      localStorage.setItem("login-token", res.data);
      console.log(res.message)
      window.location.href = '/';
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        showErrorFunc(error.response.data.message);
      }
    }

  }
  // Giriş hataları için uyarılar
  const showErrorFunc = (error) => {
    const errorMessage = (error) => (
      `
      <div class="alert alert-error shadow-sm">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>${error}</span>
      </div>
    </div>
      `
    )
    if (error == '"Email" is not allowed to be empty')
      errorRef.current.innerHTML = errorMessage('E-mail alanı boş bırakılamaz.');
    else if (error == '"Email" must be a valid email')
      errorRef.current.innerHTML = errorMessage('Geçersiz E-mail adresi!');
    else if (error == '"Password" is not allowed to be empty')
      errorRef.current.innerHTML = errorMessage('Şifre alanı boş bırakılamaz.');
    else
      errorRef.current.innerHTML = errorMessage(error);
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
              Giriş Yap
            </h2>
          </div>
          <form className='mt-3' method="POST">
            <div>
              <div className='mb-2'>
                <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
                  E-Posta
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={loginData.email}
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
                  value={loginData.password}
                  onChange={onChangeFunc}
                  required
                  className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Şifre"
                />
              </div>
            </div>

            <div ref={errorRef}></div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                Üye değil misin?
              </div>

              <div className="text-sm">
                <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Kayıt ol
                </Link>
              </div>
            </div>


            <div className='mt-3'>
              <button
                type="button"
                onClick={loginFunc}
                className="transition ease-in  active:-translate-y-1 active:scale-90  duration-200 group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Giriş
              </button>
            </div>
          </form>
        </div>
      </div >
    </>
  );
};

export default Login;
