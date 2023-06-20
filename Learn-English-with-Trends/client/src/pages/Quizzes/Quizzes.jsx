import React, { Suspense, lazy } from 'react'
import { Outlet } from 'react-router'

const Quizzes = () => {
    return (
        <>
            <Suspense fallback={<div>Yükleniyor...</div>}>
                <Outlet />
            </Suspense>

        </>
    )
}

export default Quizzes
