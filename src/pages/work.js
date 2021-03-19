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
                <p>At <b>Facebook</b>, I worked on their <b>Network Infra team</b>, automating the deployment of network configs. </p>

                <p>At <b>JPMorgan</b>, I worked on <b>data modeling</b>, and <b>data engineering</b> at scale.</p>

                <p>
                    At <b><a href="https://www.sihuatech.com/" rel="noopener noreferrer" target="_blank">Sihua Technologies</a></b>,
                    I improved the deployment time for their <b>CI/CD</b> pipeline</p>

                <p>
                    I also run an app development club at Rice called <b><a target="_blank" rel="noopener noreferrer" href="http://riceapps.org/">RiceApps</a></b>.
                    We're about 50 members strong now, and we're building some pretty {" "}
                    <b><a target="_blank" rel="noopener noreferrer"  href="https://medium.com/riceapps/riceapps-2020-2021-projects-a9b705391790">ambitious projects</a></b> this year.
                </p>

                <p>
                    While studying at Rice, I <b>TA'd</b> for a few CS courses (head TA for <b>Parallel Programming</b>,
                    and <b>Data Science</b>) and had a short <b>undergrad research</b> stint in <b>deep learning</b>.
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
