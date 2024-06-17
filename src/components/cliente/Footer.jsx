

const Footer = () => {
  return (
    <footer>
      <div className="min-w-full bg-[#F5BE90] md:flex align-middle items-center justify-between px-[100px] py-[20px]">
        <div className="flex justify-center align-middle">
          <img className="h-[80px] w-auto" src="/img/logo_lula.png" alt="logo_lula" />
        </div>
        <div className="flex align-middle items-center justify-around w-80">
          <div>
            <h3 className="text-xl">Contáctanos</h3>
          </div>
          <div className="flex w-32 justify-around">
            <a target="_blank" href="https://wa.me/573183522345">
              <img className="h-[35px] w-[35px]" src="/img/whatsapp.png" alt="logo_whatsapp" />
            </a>
            <a target="_blank" href="https://www.instagram.com/lula_crochet_/">
              <img className="h-[35px] w-[35px]" src="/img/instagram.png" alt="logo_instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
