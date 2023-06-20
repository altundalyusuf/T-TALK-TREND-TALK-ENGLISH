import React from 'react'
import t_talk_logo_gif from "../../assets/t-talk-logo.gif";
import logo_home_page_right from "../../assets/logo_home_page_right.png";

const Achievements = () => {
    return (
        <div className='h-screen bg-slate-400'>
            <h2 className='font-extrabold text-4xl mb-3 ms-4 pt-4'>Haftalık İstatistik</h2>
            <div className='flex justify-center'>
                <div className="stats shadow">
                    <div className="stat place-items-center">
                        <div className="stat-figure text-success">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">Doğru bilinen kelime sayısı</div>
                        <div className="stat-value text-success">54</div>
                        <div className="stat-desc">Geçen aydan %21 daha fazla!</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-figure text-error">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Yanlış bilinen kelime sayısı</div>
                        <div className="stat-value text-error">32</div>
                        <div className="stat-desc">Geçen aya göre %10 daha az!</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <img src={t_talk_logo_gif} />
                                </div>
                            </div>
                        </div>
                        <div className="stat-value">86%</div>
                        <div className="stat-title">Testler çözüldü</div>
                        <div className="stat-desc text-error">13 test beklemede</div>
                    </div>
                </div>
            </div>


            <h2 className='font-extrabold text-4xl mb-3 ms-4 pt-4'>Haftalık Sıralama</h2>
            <div className='pt-2 p-8'>
                <div className="overflow-x-auto w-full">
                    <table className="table text-center w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>İsim</th>
                                <th>Doğru Bilinen Kelime</th>
                                <th>Yanlış Bilinen Kelime</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={logo_home_page_right} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Ayşe Gül</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-success badge-lg">84</span>
                                </td>
                                <td><span className="badge badge-error badge-lg">21</span></td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={logo_home_page_right} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Mehmet Ali</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-success badge-lg">78</span>
                                </td>
                                <td><span className="badge badge-error badge-lg">30</span></td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={logo_home_page_right} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Muhammet Yılmaz</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-success badge-lg">72</span>
                                </td>
                                <td><span className="badge badge-error badge-lg">27</span></td>
                            </tr>
                            {/* row 4 */}
                            <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={logo_home_page_right} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Emin Demirci</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-success badge-lg">68</span>
                                </td>
                                <td><span className="badge badge-error badge-lg">29</span></td>
                            </tr>
                        </tbody>
                        {/* foot */}
                        <tfoot>
                            <tr>
                                <th>İsim</th>
                                <th>Doğru Bilinen Kelime</th>
                                <th>Yanlış Bilinen Kelime</th>
                            </tr>
                        </tfoot>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default Achievements
