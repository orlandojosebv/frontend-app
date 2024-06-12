import logo_lula from "/public/img/logo_lula.png";
import instagram from "/public/img/instagram.png";
import whatsapp from "/public/img/whatsapp.png";

export function Footer(){
    return <>
    <div className="min-w-full bg-[#F5BE90] md:flex align-middle items-center justify-between px-[100px] py-[20px]">
        <div className="flex justify-center align-middle">
            <img className="h-[80px] w-[170px]" src={logo_lula} alt="logo_lula" />
        </div>
        <div className="flex  align-middle items-center justify-around w-80">
            <div>
                <h3 className="text-xl">Contáctanos</h3>
            </div>
            <div className="flex  w-32 justify-around">
                <a target="_blank" href="https://youtu.be/tYb7-KmMyRs?si=x1YWHRguf8ePuzEr&t=740">
                    <img className="h-[35px] w-[35px]" src={whatsapp} alt="logo_whatsapp" />
                </a>
                <a target="_blank" href="https://www.instagram.com/lula_crochet_/">
                    <img className="h-[35px] w-[35px]" src={instagram} alt="logo_instagram" />
                </a>
            </div>
        </div>
    </div>
    </>
}