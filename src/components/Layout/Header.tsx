import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Nav from './Nav'

const Header: React.FC = () => {
  const useHeaderMenuData = () => {
    const { allWpMenu, allWp } = useStaticQuery(
      graphql`
        query HeaderMenuQuery {
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

  const { allWpMenu, allWp } = useHeaderMenuData();

  const menu = allWpMenu.nodes.find(
    // filters through all nodes, and filters those by location.
    (menu: any) => menu.locations.find(
      // MENU_1 = Header Menu
      // MENU_2 = Footer Menu
      (location:any) => location === "MENU_1"
      )
  );

  const { nodes } = allWp;
  const { generalSettings: { title } } = nodes[0];

  return (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      {title && (
        <>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {title}
            </Link>
          </h1>
        </>
      )}
      <Nav menu={menu} />
    </div>
  </header>
)}

export default Header
