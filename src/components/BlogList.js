import React from "react"
import { Link } from "gatsby"
import useBlogData from "../static_queries/useBlogData"
import blogListStyles from "../styles/components/bloglist.module.scss"
import Img from 'gatsby-image'

export default function BlogList() {
  const blogData = useBlogData();
  console.log()
  function renderBlogData() {
    return (
      <div>
        {blogData
          .filter(blog => window.location.search.split('=')[1] ? blog.node.frontmatter.category === window.location.search.split('=')[1] : true  )
          .map(blog => {
            console.log('blog.node.frontmatter.hero_image', blog.node.frontmatter.hero_image);
            return (
              <Link to={`/blog/${blog.node.fields.slug}`} key={blog.node.id}>
                <li className={blogListStyles.li} key={blog.node.fields.slug}>
                  <div className={blogListStyles.list__hero}>
                    {blog.node.frontmatter.hero_image && <Img 
                      fluid={
                        blog.node.frontmatter.hero_image.childImageSharp.fluid
                      }
                      alt={blog.node.frontmatter.title}
                    />}
                  </div>
                  <div className={blogListStyles.list__info}>
                    <h2>{blog.node.frontmatter.title}</h2>
                    <h3>{blog.node.frontmatter.date}</h3>
                    <p>{blog.node.excerpt}</p>
                  </div>
                </li>
              </Link>
            )
          })}
      </div>
    )
  }
  return (
    <section>
      <ul className={blogListStyles.list}>{renderBlogData()}</ul>
    </section>
  )
}

