import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"


// https://www.robinwieruch.de/javascript-groupby
export function groupByYear(posts) {
    return posts.reduce((acc, post) => {
        let year = new Date(post.frontmatter.date).getFullYear();
        // Group initialization
        if (!acc[year]) {
            acc[year] = [];
        }
        // Grouping
        acc[year].push(post);
        return acc;
    }, {});
}

const Archive = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const posts = data.allMarkdownRemark.nodes
    const postsByYear = groupByYear(posts);

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="Archive" />
            <Bio />
            {Object.keys(postsByYear).map((year, i) => {
                return (
                    <ol style={{ listStyle: `none` }} key={i}>

                        <h2>{year}</h2>
                        {postsByYear[year].map(post => {
                            const title = post.frontmatter.title || post.fields.slug
                            return (
                                <li key={post.fields.slug}>
                                    <article
                                        // className="post-list-item"
                                        itemScope
                                        itemType="http://schema.org/Article"
                                    >
                                        <header>
                                            <p>
                                                <Link to={post.fields.slug} itemProp="url">
                                                    <span itemProp="headline">{title}</span>
                                                </Link>
                                            </p>
                                        </header>
                                    </article>
                                </li>
                            )
                        })}
                    </ol>
                )
            })}
        </Layout>
    )
}

export default Archive

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
        }
      }
    }
  }
`
