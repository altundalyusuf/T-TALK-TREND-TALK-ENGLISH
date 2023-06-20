import React, { lazy } from 'react'
import { Route, Routes } from 'react-router'
const UserDashboardLayout = lazy(() => import("../layouts/UserDasboardLayout/UserDashboardLayout"))
const LoginLayout = lazy(() => import("../layouts/LoginLayout/LoginLayout"))
const Signin = lazy(() => import("../pages/Sign in & up/Signin"))
const Welcome = lazy(() => import("../components/Sign in & up/Welcome"))
const Signup = lazy(() => import("../pages/Sign in & up/Signup"))
const Home = lazy(() => import("../pages/Homepage/Home"))
const DailyMovies = lazy(() => import("../pages/DailyMovies/DailyMovies"))
const AboutUs = lazy(() => import("../components/AboutUs/AboutUs"))
const Quizzes = lazy(() => import("../pages/Quizzes/Quizzes"))
const Quiz = lazy(() => import("../components/Quiz/Quiz"))
const Question = lazy(() => import("../components/Quiz/Question"))
const Achievements = lazy(() => import("../pages/Achievements/Achievements"))
const Profile = lazy(() => import("../pages/Profile/Profile"))
const Settings = lazy(() => import("../pages/Settings/Settings"))
const NotFound = lazy(() => import("../pages/NotFound"))


const IndexRoutes = () => {
    const user = localStorage.getItem("login-token");
    return (
        <>
            <Routes>
                {/* Kullanıcı yoksa */}
                {!user &&
                    <Route path='/' element={<LoginLayout />} >
                        <Route index element={<Welcome />} />
                        <Route path='/login' element={<Signin />} />
                        <Route path='/register' element={<Signup />} />
                    </Route>
                }
                {/* Kullanıcı giriş yaptıysa */}
                {user &&
                    <Route path='/' element={<UserDashboardLayout />} >
                        <Route index element={<Home />} />
                        <Route path='/:id' element={<Home />} />
                        <Route path='daily-movies' element={<DailyMovies />} />
                        <Route path='about-us' element={<AboutUs />} />
                        
                        <Route path='quizzes' element={<Quizzes />} >
                            <Route index element={<Quiz />} />
                            <Route path='questions' element={<Question />} />
                        </Route>
                        <Route path='achievements' element={<Achievements />} />
                        <Route path='profile' element={<Profile />} />
                        <Route path='settings' element={<Settings />} />
                    </Route>
                }

                {/* Sayfa bulunamadı */}
                <Route path='*' element={<NotFound />} />

            </Routes>
        </>
    )
}

export default IndexRoutes
