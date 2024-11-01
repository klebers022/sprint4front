'use client'
// pages/participantes.tsx
import Image from "next/image";
import Link from "next/link";
import "./participantes.css";

type Participante = {
    id: number;
    nome: string;
    rm: string;
    github: string;
    redesSociais: {
      instagram: string;
      linkedin: string;
    };
    foto: string;
  };

const participantes: Participante[] = [
  {
    id: 1,
    nome: "Gabriel Thomas",
    rm: "558637",
    github: "https://github.com/GThomaz03",
    redesSociais: {
      instagram: "https://instagram.com/gabs.t_",
      linkedin: "https://www.linkedin.com/in/gabrielthomaz/",
    },
    foto: "/gabriel.png",
  },
  {
    id: 2,
    nome: "Kleber da Silva",
    rm: "557887",
    github: "https://github.com/klebers022",
    redesSociais: {
      instagram: "https://instagram.com/klebers022",
      linkedin: "https://www.linkedin.com/in/kleberdasilva-/",
    },
    foto: "/kleber.png",
  },
  {
    id: 3,
    nome: "Pedro Dovigo",
    rm: "556491",
    github: "https://github.com/pedro.dovigo",
    redesSociais: {
      instagram: "https://instagram.com/pedrodovigo",
      linkedin: "https://www.linkedin.com/in/pedrodovigo/",
    },
    foto: "/pedro.png",
  },
];

const ParticipantCard: React.FC<{ participante: Participante }> = ({
  participante,
}) => (
  <div className="participant-card">
    <Image
      src={participante.foto}
      alt={participante.nome}
      width={100}
      height={100}
      className="participant-photo"
    />
    <h2 className="participant-name">{participante.nome}</h2>
    <p className="participant-rm">RM: {participante.rm}</p>
    <a
      href={participante.github}
      className="participant-github"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </a>
    <div className="participant-socials">
      <a
        href={participante.redesSociais.instagram}
        className="social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
      <a
        href={participante.redesSociais.linkedin}
        className="social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </div>
  </div>
);

const ParticipantesPage: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title">Participantes</h1>
      <div className="participant-list">
        {participantes.map((participante) => (
          <ParticipantCard key={participante.id} participante={participante} />
        ))}
      </div>
    </div>
  );
};

export default ParticipantesPage;

