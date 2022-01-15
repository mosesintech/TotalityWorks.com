import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Footer: React.FC = () => {
    const useFooterMenuData = () => {
        const { allWpMenu, allWp } = useStaticQuery(
          graphql`
            query FooterMenuQuery {
              allWpMenu {
                nodes {
                  id
                  locations
                  menuItems {
                    nodes {
                      label
                      path
                    }
                  }
                }
              }
              allWp {
                nodes {
                  generalSettings {
                    title
                  }
                }
              }
            }
          `
        )
        return { allWpMenu, allWp }
    }

    const { allWpMenu, allWp } = useFooterMenuData();

    const menu = allWpMenu.nodes.find(
    // filters through all nodes, and filters those by location.
    (menu: any) => menu.locations.find(
        // MENU_1 = Header Menu
        // MENU_2 = Footer Menu
        (location:any) => location === "MENU_2"
        )
    );

    const { nodes } = allWp;
    const { generalSettings: { title } } = nodes[0];

    return (
        <>
            <footer
                style={{
                    marginTop: `2rem`,
                    }}
                >
                <p>
                    © {new Date().getFullYear()}, <Link to='/'>{title}</Link>
                </p>
                {menu && menu.menuItems.nodes.map((item, i) => (
                    <>
                        <Link to={`${item.path}`} key={i}>{item.label}</Link>
                    </>
                ))}
            </footer>
        </>
    )
}
    
export default Footer
