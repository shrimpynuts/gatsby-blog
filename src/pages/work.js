import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Work = ({ data, location }) => {
  return (
    <Layout location={location} title={"Work"}>
      <SEO title="Work" />
      <h1>Work</h1>
      <div className="section-content">
        <p>
          At Facebook, I worked on their Network Infra team, automating the
          deployment of network configs.{" "}
        </p>

        <p>
          At JPMorgan, I worked on data modeling, and data engineering at scale.
        </p>

        <p>
          At{" "}
          <a
            href="https://www.sihuatech.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Sihua Technologies
          </a>
          , I improved the deployment time for their CI/CD pipeline
        </p>

        <p>
          I also run an app development club at Rice called{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://riceapps.org/"
          >
            RiceApps
          </a>
          . We're about 50 members strong now, and we're building some pretty{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/riceapps/riceapps-2020-2021-projects-a9b705391790"
          >
            ambitious projects
          </a>{" "}
          this year.
        </p>

        <p>
          While studying at Rice, I TA'd for a few CS courses (head TA for
          Parallel Programming, and Data Science) and had a short undergrad
          research stint in deep learning.
        </p>
      </div>
    </Layout>
  )
}

export default Work

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
