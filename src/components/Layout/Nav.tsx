import * as React from "react"
import { Link } from "gatsby"

interface NavProps {
    menu: any
}

const Nav: React.FC<NavProps> = ({ menu }) => {
    const ctaLink = menu.menuItems.nodes.slice(-1);

    return (
        <>
        {menu && ctaLink && menu.menuItems.nodes.map((item, i) => (
            <>
                {item.label !== ctaLink[0].label ? (
                    <>
                    <Link to={`${item.path}`} key={i}>{item.label}</Link>
                    </>
                ) : (
                    <>
                    <Link to={`${item.path}`} key={i}>{item.label}</Link>
                    </>
                )}
            </>
        ))}
        </>
    )
}

export default Nav
