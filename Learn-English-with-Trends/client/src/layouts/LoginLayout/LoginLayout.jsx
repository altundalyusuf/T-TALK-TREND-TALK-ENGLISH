import React, { lazy, Suspense } from 'react'
const LoginNavbar = lazy(() => import('../../components/Sign in & up/LoginNavbar'))
import { Outlet } from 'react-router'

const LoginLayout = () => {
    return (
        <>
            <LoginNavbar />
            <Suspense fallback={<div>Yükleniyor...</div>}>
                <Outlet />
            </Suspense>
        </>
    )
}

export default LoginLayout
