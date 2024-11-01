// pages/index.tsx
'use client'
import Image from "next/image";
import Link from "next/link";
import "./globals.css";


const Home: React.FC = () => {
  return (
    <>
   
      
    

      <main>
        <div className="content-wrapper">
          <section className="intro">
            <h2>HELPCAR</h2>
            <h4>A solução na palma da sua mão para manter seu carro sempre pronto!</h4>
            <h3>Faça seu cadastro</h3>
            <p>
              Está pronto para cuidar do seu carro de forma inteligente? 
              Faça seu cadastro agora e tenha acesso ao sistema HelpCar! 
              Com poucos cliques, você terá diagnósticos rápidos, ajuda especializada e tudo que precisa para manter seu veículo em perfeito estado.
            </p>
            <Link href="/cadastro" className="cta-button">Cadastre-se</Link>
          </section>

          <section className="features">
            <div className="card helpbot">
              <div className="card-content">
                <h3>HelpBot</h3>
                <p>Digite e descubra! Comigo, a solução está a uma mensagem de distância!</p>
                <Link href="#" className="cta-button">Comece já</Link>
              </div>
              <Image 
                src="/robohelpcar.png" 
                alt="HelpBot" 
                width={300} 
                height={300} 
                className="robot-image" 
              />
            </div>

            <div className="card helpscan">
              <div className="card-content">
                <h3>HelpScan</h3>
                <p>Aponte a câmera, veja a solução! O diagnóstico do seu carro ficou fácil!</p>
                <Link href="#" className="cta-button">Comece já</Link>
              </div>
              <Image 
                src="/robohelpcar.png" 
                alt="HelpScan" 
                width={300} 
                height={300} 
                className="robot-image" 
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
