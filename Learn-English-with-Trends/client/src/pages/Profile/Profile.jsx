import React, { useRef, useState } from 'react'

const Profile = () => {
    const [userInfo, setUserInfo] = useState({
        profilePhoto: null,
        displayName: '',
    });
    // If photo is uploading don't submit yet
    const [loading, setLoading] = useState(false);
    const ref = useRef();
    // If inputs not changed then don't submit
    const condition = !userInfo.profilePhoto && userInfo.displayName == ''

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setUserInfo((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    }

    // Update user informations after submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userInfo.profilePhoto && userInfo.displayName) {
            setUserInfo({
                profilePhoto: null, displayName: '',
            })
            ref.current.value = ''
            window.location.reload(true);
        }
        else if (userInfo.profilePhoto && userInfo.displayName == '') {
            setUserInfo(prev => ({ ...prev, profilePhoto: null }))
            ref.current.value = ''
            window.location.reload(true);
        }
        else if (!userInfo.profilePhoto && userInfo.displayName) {
            setUserInfo(prev => ({ ...prev, displayName: '' }))
            alert('Kullanıcı adı başarıyla değiştirildi')
            window.location.reload(true);
        }
    }

    return (
        <>
            <div>
                {/* Header */}
                <h1 className='text-center text-3xl font-bold pt-12 pb-3'>Hesabım</h1>
                <div>
                    <p className='text-center text-lg'>Hoşgeldin</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <h1 className='text-center text-2xl font-bold pt-8 py-4'>Bilgilerini Güncelle</h1>
                    <div className="space-y-12 pb-12">
                        <div>
                            <p className=" text-center text-sm leading-6 ">Bilgilerinizi aşağıdan düzenleyebilirsiniz.</p>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-7 px-3 md:px-28">

                                {/* Change Photo */}
                                <div className="sm:col-span-3 sm:col-start-3">
                                    <label htmlFor="photo" className="block text-sm font-medium leading-6 text-primary">
                                        Profil Fotoğrafı
                                    </label>

                                    <div className="mt-2 flex items-center gap-x-3">
                                        <input type="file" id='profilePhoto' ref={ref} name='profilePhoto' onChange={handleChange} className="file-input file-input-bordered file-input-sm w-full max-w-sm" />
                                    </div>
                                </div>

                                {/* Display Name */}
                                <div className="sm:col-span-2 sm:col-start-3">
                                    <label htmlFor="displayName" className="block text-sm font-medium leading-6 text-primary">
                                        Kullanıcı Adı
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="displayName"
                                            id="displayName"
                                            value={userInfo.displayName}
                                            onChange={handleChange}
                                            placeholder='Kullanıcı Adı'
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 flex items-center justify-center gap-x-6 tooltip" data-tip='2 alan da boşken güncelleme yapılamaz.'>
                        <button disabled={loading || condition} type="button" className="text-sm font-semibold leading-6 text-info-content">
                            İptal
                        </button>
                        <button
                            disabled={loading || condition}
                            type="submit"
                            className="rounded-md bg-success hover:bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Güncelle
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Profile
