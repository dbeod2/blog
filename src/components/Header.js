import React from "react"
import { Link } from "gatsby"
import useBlogData from '../static_queries/useBlogData'
import headerStyles from "../styles/components/header.module.scss"

export default function Header(props) {
  const allBlogData = useBlogData()
  const menus = getNextSlug()

  function getNextSlug() {
    const allMenu = allBlogData.map(blog => {
      return blog.node.frontmatter.category
    })
    return allMenu;
  }
  return (
    <header
      className={`${headerStyles.header} ${props.page === 'info' &&
        headerStyles.info_page}`}
    >
      <nav
        className={headerStyles.header__nav}
        role="navigation"
        aria-label="main navigation"
      >
        <Link to="/">
          <h1>{props.title}</h1>
        </Link>
        {
          menus.map((menu) => {
            return menu && (
              <Link to={`/?category=${menu}`}>
                <p>{menu}</p>
              </Link>
            )
          })
        }
        <div>
          <h1>
            <Link
              to={
                props.page === 'info'
                  ? "/"
                  : "/info"
              }
              activeClassName={headerStyles.navItemActive}
            >
              {props.page === 'info'
                ? "close"
                : "info"}
            </Link>
          </h1>
        </div>
      </nav>
    </header>
  )
}