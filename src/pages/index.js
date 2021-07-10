import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Jonathan Cai" absolute />
      <Bio />
      <p>
        <i>
          These are my favorite posts. The rest of them live in{" "}
          <Link to="/archive">/archive</Link>
        </i>
      </p>

      <ol style={{ listStyle: `none` }}>
        {posts
          .filter(post => post.frontmatter.home)
          .map(post => {
            const title = post.frontmatter.title || post.fields.slug
            let { readingTime } = post.fields

            return (
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small>
                      {post.frontmatter.date} | {readingTime.words} words |{" "}
                      {readingTime.text}
                    </small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </li>
            )
          })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
          readingTime {
            text
            words
          }
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          home
        }
      }
    }
  }
`
