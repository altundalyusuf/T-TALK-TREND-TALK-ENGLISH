import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Merhaba</h1>
                        <p className="py-6">Yanlış bir adrese gitmeye çalıştığını fark ettik. Ana sayfaya dönmek istersen aşağıdaki butonu kullanabilirsin.</p>
                        <button className="btn btn-primary"><Link to='/'>Anasayfa</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound
