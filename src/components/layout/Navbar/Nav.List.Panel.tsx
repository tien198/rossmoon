import { useContext, useEffect, useState } from "react";
import type { MenuItem } from "../../types/menuItem";
import Item from "./Nav.List.Item";

import styles from './nav.module.scss'
import BackButton from "./Nav.List.BackButton";
import ListPanelProvider, { ListPanelContext } from "./store/panelContext";

type Props = {
    // isRoot indicate that this is root of Navbar
    isRoot?: boolean
    item: MenuItem
    layoutActive: boolean
    isActive?: boolean
    handleActivate?: () => void
    footerPanel?: React.ReactElement
}

export default function Panel(props: Props) {
    return <ListPanelProvider>
        <PanelContainer {...props} />
    </ListPanelProvider>
}


function PanelContainer({
    isRoot = false, item, layoutActive = false, isActive = false,
    handleActivate, footerPanel
}: Props) {

    const [laytAct, setLaytAct] = useState(false)
    useEffect(() => {
        if (!layoutActive)
            setLaytAct(false)
        else if (isActive)
            setLaytAct(true)

    }, [layoutActive, isActive])

    const { state } = useContext(ListPanelContext)

    const activeCls = isActive && layoutActive ? styles['active'] : ''

    return (
        <>
            <div
                className={isRoot ? '' : styles['nav__list__panel'] + ' ' + activeCls}
            >

                <div className={styles['nav__list__panel--content'] + ' ' + activeCls}>
                    {/* This layout is children's layout */}
                    <div className={styles['nav__list__panel--layout'] + ' ' + ((state.actIdx !== null && isActive) ? styles['active'] : '')}></div>

                    <div className={`${styles['wrapper']} ${activeCls}`}>
                        {item.nameDisplay
                            &&
                            <BackButton
                                onClick={handleActivate!}
                            >
                                {item.nameDisplay}
                            </BackButton>}
                        <ul className={`${styles['nav__list']} ${activeCls}`}>
                            {item.categoryItems?.map((i, idx) =>
                                <Item
                                    item={i} key={idx}
                                    idx={idx}
                                    layoutActive={laytAct}
                                />
                            )}
                        </ul>
                        {
                            footerPanel
                        }
                    </div>
                </div>
            </div>
        </>
    )
}