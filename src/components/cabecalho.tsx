// components/Cabecalho.tsx
'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Cabecalho.css";

export default function Cabecalho() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <div className="logo-container">
        <Image src="/logo-helpcar (1).png" alt="logo helpcar" width={40} height={40} />
        <p className="logo-title"> HELPCAR </p>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={isMenuOpen ? "active" : ""}>
        <ul>
          <li>
            <Link href="/" onClick={closeMenu}>Home</Link>
          </li>
         
          <li>
            <Link href="/participantes" onClick={closeMenu}>Participantes</Link>
          </li>
          <li>
            <Link href="/login" onClick={closeMenu}>
              <button className="login-button">Login</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
