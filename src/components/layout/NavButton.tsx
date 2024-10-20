
type buttonType = { clickHandler: any, children: any }

function NavButton(props: buttonType) {
    const { clickHandler, children } = props
    return (
        <button onClick={clickHandler} className="flex items-center gap-2 text-xs font-bold">
            {children}
        </button>
    )
}

export default NavButton