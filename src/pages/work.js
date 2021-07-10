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
          At Facebook, I improved the efficiency of a few of their backend
          network services by a smidget, which turns out to scale quite nicely
          when multiplied across billions of users.
        </p>

        <p>
          At JPMorgan, I worked on data modeling to help them finance loans and
          bonds. The business-ey stuff that will dry your eyes out.
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
          , I improved their server deployment times signficantly (~70%).
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
          . I grew it to 50 members, and we're building some pretty{" "}
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
