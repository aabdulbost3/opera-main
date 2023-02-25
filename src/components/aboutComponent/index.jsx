import { useRef } from "react" 
import "./style.css" 
 
function AboutComponent() { 
    const modal = useRef() 
    const closeModalBtn = useRef() 
    const closeOverlayBtn = useRef() 
    const openModal = () => { 
        modal.current.style.top = '10%' 
        modal.current.style.display = 'block' 
        closeModalBtn.current.style.display = 'block' 
        closeOverlayBtn.current.style.display = 'block' 
    } 
    const closeModal = () => { 
        modal.current.style.top = '100%'
        modal.current.style.display = 'block' 
        closeModalBtn.current.style.display = 'none' 
        closeOverlayBtn.current.style.display = 'none' 
    } 
    return( 
        <div className="aboutComp"> 
            <i onClick={closeModal} ref={closeModalBtn} className="fa-solid fa-xmark overP"></i> 
            <div onClick={closeModal} ref={closeOverlayBtn} className="overlay"></div> 
            <div className="ModalUpOl"> 
                <div ref={modal} className="aboutModal"> 
                <div>
                        <img src="https://res.cloudinary.com/dnuh1ejtz/image/upload/v1675861456/OPERA_olbqhc.png" alt="img" /> 
                        <h1>Biz haqimizda</h1> 
                        <p>Opera brendni rivojlantirish, strategiya bilan ishlash, yangidan-yangi nyuanslarga tayangan holda biznes muammolarini yechish, tahlil qilish va tadqiqot o'tkazishga qaratilgan jamoa.</p> 
                        <p>Opera brendni rivojlantirish, strategiya bilan ishlash, yangidan-yangi nyuanslarga tayangan holda biznes muammolarini yechish, tahlil qilish va tadqiqot o'tkazishga qaratilgan jamoa.</p> 
                        <h2>Missiyamiz:</h2> 
                        <p>— Biznes egalarini mahsulot yoki xizmat emas, balki emotsiya sotish darajasiga olib chiqish</p> 
                        <h2>Maqsadimiz:</h2> 
                        <p>— Endi kirib kelmoqchi bo'lgan mahsulot yoki xizmatdan iborat bizneslarni bozorga qiymatli tarzda taqdim etish.</p> 
                        <p>— Rivojlanishda to'siqqa uchragan va raqobatdan orqada qolgan bizneslarni bozorda saqlab qolish.</p> 
                        <p>— Mahsulot yoki xizmati tobora kengayib borayotgan biznesni katta masshtabga chiqarish.</p> 
                        <h2>Asosiy qadriyatlarimiz:</h2> 
                        <p>— Haqiqiylik;</p> 
                        <p>— Kreativlik;</p> 
                        <p>— G'amxo'rlik;</p> 
                        <p>— Maksimallik va professionallik</p> 
                        </div>
                </div>  
            </div> 
            <div className="container"> 
                <h1>Biz haqimizda</h1> 
                <p>Biz har doim tanish narsalarga yangicha nazar tashlaydigan va nostandart yechimlar tufayli mijoz byudjetini tejaydigan mustaqil ijodiy agentligimiz.</p> 
                <button className="i12kkerd" onClick={openModal}>Batafsil</button> 
            </div> 
        </div> 
    ) 
} 
export default AboutComponent