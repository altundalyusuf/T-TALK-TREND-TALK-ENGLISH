import React, { lazy, Suspense } from 'react'
const UserNavbar = lazy(() => import('../../components/Homepage/UserNavbar'))
import { Outlet } from 'react-router'
import { CategoryContextProvider } from '../../contexts/CategoryContext'

const UserDashboardLayout = () => {
    return (
        <>
            <UserNavbar />
            <Suspense fallback={<div>Yükleniyor...</div>}>
                <CategoryContextProvider>
                    <Outlet />
                </CategoryContextProvider>
            </Suspense>
        </>
    )
}

export default UserDashboardLayout
