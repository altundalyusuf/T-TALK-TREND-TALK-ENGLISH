import React from 'react'
import yusuf_altundal from "../../assets/yusuf_altundal.png";
import t_talk_logo from "../../assets/t_talk_logo.png";
import baran from "../../assets/baran.jpeg";
import gezici from "../../assets/gezici.jpeg";

const AboutUs = () => {
    return (
        <>
            <section className="min-h-screen ">

                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={t_talk_logo} className="max-w-sm rounded-lg shadow-2xl h-96" />
                        <div>
                            <h1 className="text-5xl font-bold mt-5 text-main-color">T-TALK</h1>

                            <p className="py-6">Bu harika ve faydalı İngilizce eğitim sitesine hoşgeldin.Burada trend ve güncel kelimeler ile İngilizce'yi doğru ve yaygın kullanıldığı şekilde öğrenebileceğine gönülden inanıyoruz.Hemen kaydol ve sitemizin sağladığı olanaklardan faydalan!
                            </p>
                            <h6 className='font-bold'>Biz Kimiz?</h6>
                            <p className="py-6">Biz bir grup hevesli ve inovatif Bilgisayar Mühendisiyiz. Amacımız, kendimizin de öğrenmede hevesli olduğu ve yer yer zorlandığı İngilizce'yi kolaylaşırmak! İngilizce öğrenmek günümüzde her zamankinden daha önemli bir durumda. Bizler de bu durumu görüp geleneksel İngilizce eğitimini bir üst seviyeye taşımaya karar verdik. Sosyal medyayı kullanarak hem İngilizce'yi sizlere sevdirmeyi hem de popüler güncel yapıları öğretmeyi amaçlıyoruz.
                            </p>
                            <h6 className='font-bold mb-5'>Kullandığımız Teknolojiler</h6>
                            <div className="badge badge-info m-2 p-3">NLP</div>
                            <div className="badge badge-secondary m-2 p-3">Python</div>
                            <div className="badge badge-primary m-2 p-3">Topic Classification</div>
                            <div className="badge badge-accent m-2 p-3">Sentiment Analysis</div>
                            <div className="badge badge-success m-2 p-3">TfIdf</div>
                            <div className="badge badge-warning m-2 p-3">V2Vec</div>
                            <div className="badge badge-error m-2 p-3">BERT</div>
                            <div className="badge badge-accent m-2 p-3">NLTK</div>
                            <div className="badge badge-primary m-2 p-3">Data Visualization</div>
                            <div className="badge badge-info m-2 p-3">Data Mining</div>
                            <div className="badge badge-secondary m-2 p-3">React</div>
                            <div className="badge badge-accent m-2 p-3">Vite</div>
                            <div className="badge badge-success m-2 p-3">Tailwind CSS</div>
                            <div className="badge badge-error m-2 p-3">Daisy UI</div>
                            <div className="badge badge-secondary m-2 p-3">NPM</div>
                            <div className="badge badge-primary m-2 p-3">Node.js</div>
                            <div className="badge badge-info m-2 p-3">Express.js</div>
                            <div className="badge badge-secondary m-2 p-3">MongoDB</div>
                        </div>
                    </div>
                </div>

                {/* <div className="flex flex-col justify-center items-center">
                    <h1 className='mb-10 font-bold  text-6xl text-main-color'>T-TALK</h1>
                    <h2 className='mb-3 text-2xl '>Trend Kelimeler ile İngilizce'yi Hemen Öğren!</h2>
                    <p >Bu harika ve faydalı İngilizce eğitim sitesine hoşgeldin.Burada trend ve güncel kelimeler ile İngilizce'yi doğru ve yaygın kullanıldığı şekilde öğrenebileceğine gönülden inanıyoruz.Hemen kaydol ve sitemizin sağladığı olanaklardan faydalan!
                        Burada trend ve güncel kelimeler ile İngilizce'yi doğru ve yaygın kullanıldığı şekilde öğrenebileceğine gönülden inanıyoruz. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quae tenetur repudiandae enim architecto ipsam voluptatum voluptate numquam cupiditate repellat, quia, quas quibusdam reiciendis corrupti, voluptatibus exercitationem fuga dolores placeat.</p>

                </div> */}
                <div className="reyna-quote bg-main-color -rotate-2 p-5 mb-32 text-white">
                    <h1 className='text-center text-6xl text-white ' style={{ textShadow: '10px 10px 10px s' }}>Trend Kelimeler ile İngilizce'yi Hemen Öğren!</h1>
                </div>

                <h4 className='text-center text-4xl mb-14'><strong>Ekibimiz</strong></h4>

                <div className="flex flex-wrap gap-10 justify-between m-8 ">
                    <div className="card w-96 bg-base-100 shadow-xl border border-gray-300 mb-24">
                        <figure><img src={yusuf_altundal} alt="Shoes" /></figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title ">Yusuf Altundal</h2>
                            <p>Web Geliştirme uzmanı.</p>
                        </div>
                    </div>


                    <div className="card w-96 bg-base-100 shadow-xl border border-gray-300 mb-24">
                        <figure><img src={baran} alt="Shoes" /></figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Hüsnü Baran</h2>
                            <p>Veri Bilimi ve Yapay Zeka uzmanı.</p>
                        </div>
                    </div>


                    <div className="card w-96 bg-base-100 shadow-xl border border-gray-300 mb-24">
                        <figure><img src={gezici} alt="Shoes" /></figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Meryem Gezici</h2>
                            <p>Web Geliştirme uzmanı.</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Hizmetler</span>
                    <a className="link link-hover">Markalar</a>
                    <a className="link link-hover">Tasarımlar</a>
                    <a className="link link-hover">Pazarlama</a>
                    <a className="link link-hover">Reklam</a>
                </div>
                <div>
                    <span className="footer-title">Şirket</span>
                    <a className="link link-hover">Hakkımızda</a>
                    <a className="link link-hover">İletişim</a>
                    <a className="link link-hover">İlanlar</a>
                    <a className="link link-hover">Basında Biz</a>
                </div>
                <div>
                    <span className="footer-title">Yasal</span>
                    <a className="link link-hover">Kullanım Koşulları</a>
                    <a className="link link-hover">Gizlilik Koşulları</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                    <p>T-TALK Software Ltd. Şti. <br />2023'ten beri güvenilir teknoloji desteği</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default AboutUs
