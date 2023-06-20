import React from "react";
import t_talk_logo from "../../assets/t_talk_logo.png";

const UserNavbar = () => {

  const logOut= () => {
    localStorage.removeItem("login-token");
    window.location.href= '/';
  }



  return (
    <>
      <div className="navbar bg-black text-white md:h-24 sticky top-0 z-[1000]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost hidden max-[1100px]:flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-y-2 z-auto ">
              <li>
                <a href="/" className="btn main-color border-none text-white">Ana Sayfa</a>
              </li>
              <li>
                <a href="/daily-movies" className="btn main-color border-none text-white">Önerilen Filmler</a>
              </li>
              <li>
                <a href="/quizzes" className="btn main-color border-none text-white">Quizler</a>
              </li>
              <li>
                <a href="/achievements" className="btn main-color border-none text-white">Başarılar</a>
              </li>
              <li>
                <a href="/about-us" className="btn main-color border-none text-white">Hakkımızda</a>
              </li>
            </ul>
          </div>
          <a href='/' className="btn btn-ghost normal-case text-xl place-content-center">
            <img src={t_talk_logo} className='w-14 md:w-20 rounded-full me-3' alt="Logo" />
            T-TALK
          </a>
        </div>

        <div className="navbar-middle flex-none hidden min-[1100px]:flex md:me-4">
          <ul className="menu menu-horizontal px-1 md:text-2xl bg-none ">
            <li >
              <a href="/" className="hover:text-main-color hover:text-3xl btn-ghost">Ana Sayfa</a>
            </li>
            <li>
              <a href="/daily-movies" className="hover:text-main-color hover:text-3xl btn-ghost">Önerilen Filmler</a>
            </li>
            <li>
              <a href="/quizzes" className="hover:text-main-color hover:text-3xl btn-ghost">Quizler</a>
            </li>
            <li>
              <a href="/achievements" className="hover:text-main-color hover:text-3xl btn-ghost">Başarılar</a>
            </li>
            <li>
              <a href="/about-us" className="hover:text-main-color hover:text-3xl btn-ghost">Hakkımızda</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end ">
          <div className="flex-none space-x-2 ">
            <div className="dropdown dropdown-end md:me-20 ">
              {/* My Account Dropdown */}
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom" data-tip='Hesabım'>
                <div className="w-14 md:w-16">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>

                </div>
              </label>
              <ul tabIndex={0} className="menu dropdown-content p-2 shadow text-black rounded-box w-52 mt-4 bg-white " >
                {/* Profile */}
                <li className='hover:bg-main-color hover:text-white '>
                  <a href="/profile" className="justify-between btn-ghost" >
                    Hesabım
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </a>
                </li>
                {/* Settings */}
                <li className='hover:bg-main-color hover:text-white'>
                  <a href="/settings" className="justify-between btn-ghost">
                    Ayarlar
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </a>
                </li>
                {/* Logout */}
                <li className='hover:bg-main-color hover:text-white'>
                  <a onClick={logOut} className='justify-between btn-ghost'>Çıkış
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>




      </div>
      
    </>
  );
};

export default UserNavbar;
