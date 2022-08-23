import React from 'react'
import Link from 'next/link'

export default function Header({handleOnClick, ActiveIndex}) {
    
    return (
        <>
            {/* HEADER */}
            <div className="cavani_tm_header">
                <div className="logo">
                <h1>GOODCAM</h1>
                </div>
                <div className="menu">
                    <ul className="transition_link">
                        <li onClick={() => handleOnClick(0)}><Link href="#home"><a className={ActiveIndex === 0 ? "active" : ""}>Inicio</a></Link></li>
                        <li onClick={() => handleOnClick(1)}><Link href="#about"><a className={ActiveIndex === 1 ? "active" : ""}>Sobre nosotros</a></Link></li>
                        <li onClick={() => handleOnClick(2)}><Link href="#portfolio"><a className={ActiveIndex === 2 ? "active" : ""}>Nuestos proyectos</a></Link></li>
                        <li onClick={() => handleOnClick(4)}><Link href="#contact"><a className={ActiveIndex === 4 ? "active" : ""}>Contacto</a></Link></li>
                    </ul>
                    {/* <span className="ccc" /> */}
                </div>
            </div>
            {/* /HEADER */}

        </>
    )
}
