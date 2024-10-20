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


function Navigation() {
    const black = '#000'
    const white = '#fff'
    const [svgFill, setFill] = useState(black)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 0) {
                setFill(white)
            } else {
                setFill(black)
            }
        })
    }, [])

    return (
        <header>
            <nav className={`flex justify-between p-16 ${styles['nav']}`}>
                <NavButton clickHandler={() => { }}>+ <span className="pl-4 text-sm">Contact Us</span></NavButton>
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
                            {<Bars width={25} height={25} className="h-6" fill={svgFill}>{null}</Bars>}<span className={svgFill === white ? 'text-white' : 'text-black'}>MENU</span>
                        </NavButton>
                    </li>
                </ul>

            </nav>
        </header>
    );
}

export default Navigation;
