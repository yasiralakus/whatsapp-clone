import { useState } from "react"

export default function App() {

    const [messageUser, setMessageUser] = useState(null);
    const [inputFocus, setInputFocus] = useState(false);
    const [filter, setFilter] = useState('All');
    const [inputValue, setInputValue] = useState('www.yasiralakus.com.tr')


    return (
        <div className="full-page">

            <div className="green-bg">
                <img src="./img/logo.png" alt="" />
                <p>Bu proje tablet ve masaüstü için kodlanmıştır.</p>
            </div>

            <div className="whatsapp">

                <div className="left">

                    <header>

                        <img src="./img/user.jpg" alt="" />

                        <div>
                            <button><i className="fa-solid fa-people-group"></i></button>
                            <button><i className="fa-solid fa-circle-notch"></i></button>
                            <button><i className="fa-regular fa-comment-dots"></i></button>
                            <button><i className="fa-regular fa-square-plus"></i></button>
                            <button><i className="fa-solid fa-ellipsis-vertical"></i></button>
                        </div>

                    </header>

                    <main>

                        <form>
                            <button><i className="fa-solid fa-magnifying-glass"></i></button>
                            <input type="text" placeholder="Search"/>
                        </form>

                        <div className="filtered">
                            <button style={filter === 'All' ? {color: '#008069', backgroundColor: '#E7FCE3'} : {}} onClick={() => (setFilter('All'))}>All</button>
                            <button style={filter === 'Unread' ? {color: '#008069', backgroundColor: '#E7FCE3'} : {}} onClick={() => (setFilter('Unread'))}>Unread</button>
                            <button style={filter === 'Groups' ? {color: '#008069', backgroundColor: '#E7FCE3'} : {}} onClick={() => (setFilter('Groups'))}>Groups</button>
                        </div>

                        <div style={filter !== 'All' ? {backgroundColor: '#fff'} : {}} className="message-list">

                            {
                                filter === 'All' &&
                            <>
                            <div style={messageUser === 'Beckham' ? {backgroundColor: '#f0f2f5'} : {}} onClick={() => (setMessageUser('Beckham'))} className="message-list-item">

                                <img src="https://i.insider.com/564e2f9c2491f92b008b6a48?width=800&format=jpeg&auto=webp" alt="" />

                                <div>
                                    <h3>David Beckham</h3>
                                    <p>Görüşmek üzere! Hazırlıklarına başla ya...</p>
                                </div>

                                <div style={{alignItems: 'end'}}>
                                    <h6>20:04</h6>
                                    <i></i>
                                </div>

                            </div>

                            <div style={messageUser === 'Messi' ? {backgroundColor: '#f0f2f5'} : {}} onClick={() => (setMessageUser('Messi'))} className="message-list-item">

                                <img src="https://tmssl.akamaized.net/images/foto/galerie/lionel-messi-1711467863-132837.jpg?lm=1711467875" alt="" />

                                <div>
                                    <h3>Leo Messi</h3>
                                    <p><img src="./img/gonderildi.png" alt="" /> Bu güzel sohbet için teşekkürler Leo.</p>
                                </div>

                                <div style={{alignItems: 'end'}}>
                                    <h6>18:44</h6>
                                    <i></i>
                                </div>

                            </div>

                            <div style={messageUser === 'Steve' ? {backgroundColor: '#f0f2f5'} : {}} onClick={() => (setMessageUser('Steve'))} className="message-list-item">

                                <img src="https://hips.hearstapps.com/hmg-prod/images/apple-ceo-steve-jobs-speaks-during-an-apple-special-event-news-photo-1683661736.jpg?crop=0.800xw:0.563xh;0.0657xw,0.0147xh&resize=1200:*" alt="" />

                                <div >
                                    <h3>Steve Jobs</h3>
                                    <p>Ben de teşekkür ederim! Başarılar dileri...</p>
                                </div>

                                <div style={{alignItems: 'end'}}>
                                    <h6>16:24</h6>
                                    <i className="fa-solid fa-volume-xmark"></i>
                                </div>

                            </div>

                            <div className="message-list-item">

                                <img src="https://i.idefix.com/pimages/Content/Uploads/ArtistImages/artist__96682.jpg" alt="" />

                                <div>
                                    <h3>Sezen Aksu</h3>
                                    <p><img src="./img/okundu.png" alt="" /> Abla ağzına sağlık...</p>
                                </div>

                                <div style={{alignItems: 'end'}}>
                                    <h6>Sunday</h6>
                                    <i></i>
                                </div>

                            </div>

                            <div className="message-list-item">

                                <img src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1835092593-65ba74c67f6e1.jpg?crop=1.00xw:0.710xh;0,0.0447xh&resize=640:*" alt="" />

                                <div>
                                    <h3>Barbara Palvin</h3>
                                    <p>❤️😘😘</p>
                                </div>

                                <div style={{alignItems: 'end'}}>
                                    <h6>Sunday</h6>
                                    <i></i>
                                </div>

                            </div>

                            <div className="message-list-item">

                                <img src="https://cdn.britannica.com/73/234573-050-8EE03E16/Cristiano-Ronaldo-ceremony-rename-airport-Santa-Cruz-Madeira-Portugal-March-29-2017.jpg" alt="" />

                                <div>
                                    <h3>Cristiano Ronaldo</h3>
                                    <p>Su içmeyi unutma.</p>
                                </div>

                                <div style={{alignItems: 'end'}}>
                                    <h6>Saturday</h6>
                                    <i className="fa-solid fa-volume-xmark"></i>
                                </div>

                            </div>

                            <div className="message-list-item">

                                <img src="https://im.haberturk.com/galeri/2014/08/14/ver0/441272/e86c913eda35251861bf70ecfa78fcf5_k.jpg" alt="" />

                                <div>
                                    <h3>İyi Topçular Grubu</h3>
                                    <p>~ Cristiano: Maç 11-12 miydi?</p>
                                </div>

                                <div style={{alignItems: 'end'}}>
                                    <h6>Friday</h6>
                                    <i className="fa-solid fa-volume-xmark"></i>
                                </div>

                            </div>

                            <div className="message-list-item">

                                <img src="https://iatkv.tmgrup.com.tr/9dd5b7/0/0/0/0/0/0?u=https%3A%2F%2Fitkv.tmgrup.com.tr%2Falbum%2F2024%2F03%2F13%2Fnihat-hatipoglunun-cocuklarina-bakin-said-osman-ve-mustafa-hatipoglunu-goren-birbirine-benzetemedi-alakalari-y-1710359500417.jpg&mw=420&l=1" alt="" />

                                <div>
                                    <h3>Nihat Hatipoğlu</h3>
                                    <p>Cumaya gittin mi?</p>
                                </div>

                                <div style={{alignItems: 'end'}}>
                                    <h6>Friday</h6>
                                    <i></i>
                                </div>

                            </div>

                            <div className="message-list-item">

                                <img src="https://wp.oggusto.com/wp-content/uploads/2023/10/mauro-icardi-hakkinda-her-sey.webp" alt="" />

                                <div>
                                    <h3>Mauro Icardi</h3>
                                    <p>Sıradaki golümü senin için atacağım d...</p>
                                </div>

                                <div style={{alignItems: 'end'}}>
                                    <h6>Thursday</h6>
                                    <i className="fa-solid fa-volume-xmark"></i>
                                </div>

                            </div>

                            <div className="message-list-item">

                                <img src="https://cdn.ntvspor.net/56a77522ab7e4cafa49a039d75ea03e3.jpg?mode=crop&w=940&h=626" alt="" />

                                <div>
                                    <h3>Acun Abi</h3>
                                    <p>Dominiğe ne zaman geliyosun?</p>
                                </div>

                                <div style={{alignItems: 'end'}}>
                                    <h6>Wednesday</h6>
                                    <i className="fa-solid fa-volume-xmark"></i>
                                </div>

                            </div>

                            <div className="message-list-item">

                                <img src="./img/user.jpg" alt="" />

                                <div>
                                    <h3>Mbappe</h3>
                                    <p>Sen kimsin. Numaramı kimden aldı ... </p>
                                </div>

                                <div style={{alignItems: 'end'}}>
                                    <h6>Tuesday</h6>
                                    <i className="fa-solid fa-volume-xmark"></i>
                                </div>

                            </div>

                            <div className="message-list-item">

                                <img src="https://www.rudaw.net/s3/rudaw.net/ContentFiles/800599Image1.jpg?version=6611526" alt="" />

                                <div>
                                    <h3>Fatih Terim</h3>
                                    <p><img src="./img/gonderildi.png" alt="" /> Hocam tebrik ederim.</p>
                                </div>

                                <div style={{alignItems: 'end'}}>
                                    <h6>Tuesday</h6>
                                    <i className="fa-solid fa-volume-xmark"></i>
                                </div>

                            </div>
                            </>
                            }

                            {
                                filter === 'Groups' &&
                                <div className="message-list-item">
                                    <img src="https://im.haberturk.com/galeri/2014/08/14/ver0/441272/e86c913eda35251861bf70ecfa78fcf5_k.jpg" alt="" />

                                    <div>
                                        <h3>İyi Topçular Grubu</h3>
                                        <p>~ Cristiano: Maç 11-12 miydi?</p>
                                    </div>

                                    <div style={{alignItems: 'end'}}>
                                        <h6>Friday</h6>
                                        <i className="fa-solid fa-volume-xmark"></i>
                                    </div>
                                </div>
                            }

                            {
                                filter === 'Unread' &&

                                <div className="unread">
                                    <p>No unread chats</p>
                                    <h6 onClick={() => (setFilter('All'))}>View all chats</h6>
                                </div>
                            }

                            

                        </div>

                    </main>

                </div>

                <div className="right">

                    {
                        messageUser === null && 
                        <div className="default">
                            <img src="./img/wp-default.png" alt="" />
                            <h3>Download WhatsApp for Windows</h3>
                            <p>Make calls, share your screen and get a faster experience when you download the Windows app.</p>
                            <a href="https://apps.microsoft.com/detail/9nksqgp7f2nh?hl=tr-tr&gl=TR">Get from Microsoft Store</a>
                        </div>
                    }

                    {
                        messageUser === 'Beckham' &&

                        <div className="message-box">

                            <header>

                                <div>
                                    <img src="https://i.insider.com/564e2f9c2491f92b008b6a48?width=800&format=jpeg&auto=webp" alt="" />
                                    <h3>David Beckham</h3>
                                </div>

                                <div>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                    <i className="fa-solid fa-ellipsis-vertical"></i>
                                </div>

                            </header>

                            <main>

                                <div className="outgoing message-text">
                                    <p>Selam Beckham! Yarınki halı saha maçı için hazır mısın? Hatırlatmak istedim, son maçta muazzam oynamıştın!</p>
                                    <h6>19:50 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p>Selam! Teşekkür ederim, gerçekten mi? O zaman yarınki maç için daha da hazır olmam gerek! Sen de son maçta süper oynadın, takımımıza büyük katkı sağladın.</p>
                                    <h6>19:52 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="outgoing message-text">
                                    <p>Evet, maçtan sonra biraz antrenman yaptık. Yarınki maçta da aynı tempoyla devam edeceğiz!</p>
                                    <h6>19:54 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p>Kesinlikle! Maç saati için bir düşünce var mı?</p>
                                    <h6>19:55 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="outgoing message-text">
                                    <p>Daha önce 19:00 uygun olduğunu düşünüyordum. Senin için uygun mu?</p>
                                    <h6>19:56 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p>Harika, 19:00 uygun! Başka kimler geliyor?</p>
                                    <h6>19:58 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="outgoing message-text">
                                    <p>Şu ana kadar sen, ben ve Jake varız. Ama arkadaşlarımızdan birkaçı daha katılabilir.</p>
                                    <h6>20:00 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p>Tamam, formamı da getireceğim. Senin forman hangi renk?</p>
                                    <h6>20:00 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="outgoing message-text">
                                    <p>Bizim formalar mavi, senin ki hangi renk?</p>
                                    <h6>20:01 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p>Bizimkinin sarı olduğunu düşünüyorum. Harika, mavi ve sarı uyumlu bir kombinasyon olacak!</p>
                                    <h6>20:01 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="outgoing message-text">
                                    <p>Kesinlikle! Son kez, yarın görüşürüz!</p>
                                    <h6>20:02 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p>Görüşmek üzere! Sakatlanmadan gel, yarın maçta buluşalım!</p>
                                    <h6>20:02 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="outgoing message-text">
                                    <p>Bekleyelim bakalım, son maçta senin frikik golleri sayende kazanmıştık. Bakalım bu sefer de aynı zaferi yaşayabilecek miyiz?</p>
                                    <h6>20:03 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p>Umuyorum ki! Ancak benim frikiklerim senin kalecilik performansını da unutmamalı.</p>
                                    <h6>20:03 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p>Siz kaleciler bizim işimizi zorlaştırıyorsunuz.</p>
                                    <h6>20:03 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="outgoing message-text">
                                    <p>Ama senin şutların da öyle hızlı ki, kaleciliği biraz daha zorlaştırıyorsun.</p>
                                    <h6>20:04 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p>İşte bu rekabetin güzelliği! Neyse, sakatlanmadan gel, yarın maçta buluşalım!</p>
                                    <h6>20:04 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="outgoing message-text">
                                    <p>Görüşürüz Beckham, o zaman hazırlıklara başlayayım.</p>
                                    <h6>20:04 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="outgoing message-text">
                                    <p>Sağlıcakla kal!</p>
                                    <h6>20:04 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p> Görüşmek üzere! Hazırlıklarına başla, yarın sahada buluşalım!</p>
                                    <h6>20:04 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                            </main>

                            <footer>

                                <i className="fa-regular fa-face-smile"></i>
                                <i className="fa-solid fa-plus"></i>
                                <input defaultValue={inputValue} onBlur={() => (setInputFocus(false))} onFocus={() => (setInputFocus(true))} type="text" placeholder="Type a message" />
                                {
                                    inputFocus ? 
                                    <i className="fa-solid fa-paper-plane"></i>
                                    :
                                    <i className="fa-solid fa-microphone"></i>
                                }

                            </footer>

                        </div>
                    }

                    {
                        messageUser === 'Messi' &&

                        <div className="message-box">

                            <header>

                                <div>
                                    <img src="https://tmssl.akamaized.net/images/foto/galerie/lionel-messi-1711467863-132837.jpg?lm=1711467875" alt="" />
                                    <h3>Leo Messi</h3>
                                </div>

                                <div>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                    <i className="fa-solid fa-ellipsis-vertical"></i>
                                </div>

                            </header>

                            <main>

                                <div className="outgoing message-text">
                                    <p>Merhaba Messi, nasılsın? Türk futbolu hakkında seninle konuşmak istiyorum</p>
                                    <h6>18:10 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p>Merhaba! Gayet iyiyim, teşekkürler. Türk futbolu hakkında konuşmak ilginç olur. Neler merak ediyorsun?</p>
                                    <h6>18:15 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="outgoing message-text">
                                    <p>Türk futbolunu takip etme şansın oldu mu? Hangi Türk takımları ve oyuncular hakkında bilgilerin var?</p>
                                    <h6>18:18 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p>Evet, Türk futbolunu zaman zaman takip ediyorum. Galatasaray, Fenerbahçe ve Beşiktaş gibi büyük kulüplerin maçlarını izledim.</p>
                                    <h6>18:20 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p>Ayrıca Arda Turan ve Hakan Çalhanoğlu gibi oyuncular da oldukça dikkatimi çekti.</p>
                                    <h6>18:20 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="outgoing message-text">
                                    <p>Türk futbolunun en büyük güçlü yönleri sence nelerdir?</p>
                                    <h6>18:24 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p>Türk futbolunun en büyük güçlü yönlerinden biri taraftarların tutkulu desteği. Statlarda harika bir atmosfer oluşturuyorlar. Ayrıca, fiziksel olarak güçlü ve mücadeleci bir oyun tarzına sahipler.</p>
                                    <h6>18:26 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="outgoing message-text">
                                    <p>Türk futbolunun gelişmesi için neler yapılabilir? Önerilerin var mı?.</p>
                                    <h6>18:30 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p>Alt yapı ve genç yeteneklerin gelişimine daha fazla yatırım yapılabilir. Ayrıca, antrenörlerin eğitimi ve modern futbol taktiklerinin benimsenmesi de önemli.</p>
                                    <h6>18:34 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p>Uluslararası deneyime sahip oyuncular ve antrenörler getirmek de Türk futbolunun seviyesini yükseltebilir.</p>
                                    <h6>18:34 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="outgoing message-text">
                                    <p>Türkiye'de oynama fırsatın olsaydı, hangi takımda oynamak isterdin?</p>
                                    <h6>18:38 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p>Türkiye'de oynama fırsatım olsaydı, büyük taraftar desteği ve güçlü rekabet nedeniyle Galatasaray, Fenerbahçe veya Beşiktaş gibi büyük takımlardan birinde oynamak ilginç olabilirdi.</p>
                                    <h6>18:40 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p>Türk futbolunun enerjisini ve taraftarların tutkusunu deneyimlemek harika olurdu.</p>
                                    <h6>18:40 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="outgoing message-text">
                                    <p>Bu güzel sohbet için teşekkürler Leo.</p>
                                    <h6>18:44 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                            </main>

                            <footer>

                                <i className="fa-regular fa-face-smile"></i>
                                <i className="fa-solid fa-plus"></i>
                                <input defaultValue={inputValue} onBlur={() => (setInputFocus(false))} onFocus={() => (setInputFocus(true))} type="text" placeholder="Type a message" />
                                {
                                    inputFocus ? 
                                    <i className="fa-solid fa-paper-plane"></i>
                                    :
                                    <i className="fa-solid fa-microphone"></i>
                                }

                            </footer>

                        </div>
                    }


                    {
                        messageUser === 'Steve' &&

                        <div className="message-box">

                            <header>

                                <div>
                                    <img src="https://hips.hearstapps.com/hmg-prod/images/apple-ceo-steve-jobs-speaks-during-an-apple-special-event-news-photo-1683661736.jpg?crop=0.800xw:0.563xh;0.0657xw,0.0147xh&resize=1200:*" alt="" />
                                    <h3>Steve Jobs</h3>
                                </div>

                                <div>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                    <i className="fa-solid fa-ellipsis-vertical"></i>
                                </div>

                            </header>

                            <main>

                                <div className="outgoing message-text">
                                    <p>Merhaba Steve, nasılsın? Yazılım dünyası hakkında seninle konuşmak istiyorum.</p>
                                    <h6>19:50 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p>Merhaba! Gayet iyiyim, teşekkürler. Yazılım hakkında konuşmak harika olur. Neler merak ediyorsun?</p>
                                    <h6>19:52 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="outgoing message-text">
                                    <p>Yazılım geliştirirken en önemli ilkeler nelerdir sence?</p>
                                    <h6>19:54 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p>Bence yazılım geliştirirken en önemli ilkelerden biri basitliktir. Kullanıcıya kolay ve sezgisel bir deneyim sunmalısınız. Ayrıca, tutku ve detaylara olan dikkat de kritik öneme sahiptir.</p>
                                    <h6>19:55 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="outgoing message-text">
                                    <p>Apple’ın yazılım geliştirme süreçleri nasıldı? Bu süreçlerde nasıl inovasyon sağladınız?</p>
                                    <h6>19:56 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p>Apple'da yazılım geliştirme sürecimiz oldukça titizdi. Fikir aşamasından itibaren tasarım ve kullanıcı deneyimine büyük önem verdik.</p>
                                    <h6>19:58 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p>Kullanıcıların ihtiyaçlarına yönelik çözümler geliştirdik ve sürekli geri bildirim alarak ürünlerimizi iyileştirdik. İnovasyon, farklı düşünmeyi ve risk almayı gerektirir.</p>
                                    <h6>19:58 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="outgoing message-text">
                                    <p>Kullanıcı deneyimi konusunda Apple'ı bu kadar başarılı kılan nedir?</p>
                                    <h6>20:00 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p>Kullanıcı deneyimi bizim her zaman birinci önceliğimiz oldu. Ürünlerimizin her yönünü, kullanıcının nasıl etkileşimde bulunacağını düşünerek tasarladık. Sadece iyi görünen değil, aynı zamanda kullanımı kolay ve işlevsel ürünler yaratmaya odaklandık.</p>
                                    <h6>20:00 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="outgoing message-text">
                                    <p>Yazılım dünyasında karşılaştığın en büyük zorluk neydi?</p>
                                    <h6>20:01 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p>En büyük zorluklardan biri, kullanıcıların ne istediğini onlardan önce anlamaktı. İnsanlar genellikle neye ihtiyaçları olduğunu bilmezler. Bizim görevimiz, onların hayatını kolaylaştıracak çözümleri önceden tahmin edip sunmaktı.</p>
                                    <h6>20:01 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="outgoing message-text">
                                    <p>Yazılımın geleceği hakkında ne düşünüyorsun? Hangi alanlarda büyük değişimler bekliyorsun?</p>
                                    <h6>20:02 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p>Yazılımın geleceği çok parlak. Yapay zeka ve makine öğrenimi gibi alanlarda büyük ilerlemeler bekliyorum.</p>
                                    <h6>20:02 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p>Ayrıca, artırılmış gerçeklik ve sanal gerçeklik de kullanıcı deneyiminde devrim yaratacak. IoT ve bulut teknolojileri de yaşam biçimimizi tamamen değiştirecek.</p>
                                    <h6>20:02 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="outgoing message-text">
                                    <p>Apple'da çalışırken ekip yönetimi konusunda hangi stratejileri benimsedin?</p>
                                    <h6>20:03 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p>En iyi yetenekleri bulmak ve onları motive etmek önceliğimizdi. Ekibe ilham vermek ve onlara güvenmek çok önemliydi. Ayrıca, her zaman açık iletişim ve işbirliğine dayalı bir çalışma ortamı yaratmaya çalıştık.</p>
                                    <h6>20:03 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="outgoing message-text">
                                    <p>Açık kaynak yazılım hakkında ne düşünüyorsun? Apple bu konuda neden farklı bir yol izledi?</p>
                                    <h6>20:03 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p>Açık kaynak yazılımın birçok avantajı var, özellikle geliştirici toplulukları için.</p>
                                    <h6>20:04 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p>Ancak Apple olarak, donanım ve yazılımın entegre bir şekilde çalışmasını önemsediğimiz için kapalı bir ekosistem oluşturmayı tercih ettik. Bu, kullanıcıya daha sorunsuz ve güvenli bir deneyim sunmamızı sağladı.</p>
                                    <h6>20:04 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="outgoing message-text">
                                    <p>iOS ve macOS gibi işletim sistemlerinin tasarımında nelere dikkat ettiniz?</p>
                                    <h6>20:04 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p>Tasarımda sadelik ve işlevsellik her zaman ön plandaydı. Kullanıcıların ihtiyaçlarını tahmin ederek kolay ve sezgisel bir arayüz oluşturmak istedik. Ayrıca, estetik açıdan da tatmin edici olmasına özen gösterdik.</p>
                                    <h6>20:04 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="outgoing message-text">
                                    <p>Seninle konuşmak gerçekten ilham verici, teşekkür ederim Steve!</p>
                                    <h6>20:04 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                                <div className="incoming message-text">
                                    <p>Ben de teşekkür ederim! Başarılar dilerim. Her zaman yenilikçi ve tutkulu kal.</p>
                                    <h6>16:24 <img src="./img/okundu.png" alt="" /></h6>
                                </div>

                            </main>

                            <footer>

                                <i className="fa-regular fa-face-smile"></i>
                                <i className="fa-solid fa-plus"></i>
                                <input defaultValue={inputValue} onBlur={() => (setInputFocus(false))} onFocus={() => (setInputFocus(true))} type="text" placeholder="Type a message" />
                                {
                                    inputFocus ? 
                                    <i className="fa-solid fa-paper-plane"></i>
                                    :
                                    <i className="fa-solid fa-microphone"></i>
                                }

                            </footer>

                        </div>
                    }

                </div>

            </div>

        </div>
    )
}