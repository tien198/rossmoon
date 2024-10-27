import { useEffect, useState } from "react";
import { Bars, BriefCase, MagnifyingGlass, Person } from "../Icons";
import styles from "./Navigation.module.css";
import NavButton from "./NavButton";

const navIcons = [
    {
        ImgComponent: BriefCase,
        clickHandler() { }
    },
    {
        ImgComponent: Person,
        clickHandler() { }
    },
    {
        ImgComponent: MagnifyingGlass,
        clickHandler() { }
    },
]

enum navState {
    navBase = 'nav-base',
    navSrolled = 'nav-srolled',
    black = '#000',
    white = '#fff',
    bgBlack = 'bg-black',
    bgWhite = 'bg-white'
}

function Navigation() {
    const [svgFill, setFill] = useState(navState.black)
    const [backgroundClass, setBackgroundClass] = useState('bg-white')
    const [navTransformClass, setNavTransformClass] = useState(navState.navBase)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 0) {
                setFill(navState.white)
                setBackgroundClass(navState.bgBlack)
                setNavTransformClass(navState.navSrolled)
            } else {
                setFill(navState.black)
                setBackgroundClass(navState.bgWhite)
                setNavTransformClass(navState.navBase)
            }
        })
    }, [])

    return (
        <header className={`${styles['header']} ${backgroundClass} duration-700`}>
            <nav className={`flex justify-between p-16 ${styles['nav']} ${styles[navTransformClass]} `}>
                <NavButton clickHandler={() => { }}>
                    <div style={{ color: svgFill }}><span>+</span> <span className='pl-4 text-sm'>Contact Us</span></div>
                </NavButton>
                <ul className="flex gap-8">
                    {
                        navIcons.map((icon, i) => (
                            <li key={i}>
                                <button onClick={icon.clickHandler} >
                                    {<icon.ImgComponent width={24} height={24} className="" fill={svgFill}>{null}</icon.ImgComponent>}
                                </button>
                            </li>)
                        )
                    }
                    <li>
                        <NavButton clickHandler={() => { }}>
                            {<Bars width={25} height={25} className="h-6" fill={svgFill}>{null}</Bars>}<span className={svgFill === navState.white ? 'text-white' : 'text-black'}>MENU</span>
                        </NavButton>
                    </li>
                </ul>

            </nav>
        </header>
    );
}

export default Navigation;
