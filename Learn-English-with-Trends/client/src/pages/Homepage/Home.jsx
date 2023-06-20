import React, { lazy } from 'react'
const Homepage = lazy(() => import('../../components/Homepage/Homepage'))

const Home = () => {
    return (
        <>
          <Homepage/>

        </>
    )
}

export default Home
