import * as React from "react"
import { Link } from "gatsby"

const Footer: React.FC = () => {
    return (
        <>
            <footer
                style={{
                    marginTop: `2rem`,
                    }}
                >
                    © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a>
            </footer>
        </>
    )
}
    
export default Footer
