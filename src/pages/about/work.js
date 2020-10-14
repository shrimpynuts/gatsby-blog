import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"


const Work = ({ data, location }) => {
    return (
        <Layout location={location} title={"Work"}>
            <SEO title="Work" />
            <div className="section-content">
                <p>
                    So far, I've worked as a <b>software engineer</b> during 3 internships.
            </p>
                <ul>
                    <li>
                        <p>
                            At <b>Facebook</b>, I worked on their <b>Network Infra team</b>, improving the performance and reliability of a service that generates network device configs. <br />
                The service handled ~3k requests/hour. My work saw a ~10% performance increase, and prevented several SEVs.
            </p>
                    </li>

                    <li>
                        <p>
                            At <b>JPMorgan</b>, I worked on <b>data modeling</b>, and <b>data engineering at scale</b>. <br />
                This looked like 12,000+ data points with 40+ properties on an hourly basis. <br />
                Dealt with constantly changing business requirements from investment bankers, varying data processing issues (asynchronous fetching on dynamic time cycles), etc.
            </p>
                    </li>


                    <li>

                        <p>
                            At <b><a href="https://www.sihuatech.com/" rel="noopener noreferrer" target="_blank">Sihua Technologies</a></b>,
                I improved the deployment time for their <b>CI/CD</b> pipeline by 70%, but the tool was completely unmanagable, the code was absolute crap, and not used in production.
            </p>
                    </li>
                </ul>

                <p style={{ paddingLeft: 0 }}>I've also been involved in a few <b>extracurriculars</b>.</p>
                <ul>

                    <li>
                        <p>
                            I also run an app development club at Rice called <b><a target="_blank" rel="noopener noreferrer" href="http://riceapps.org/">RiceApps</a></b>.
                We're about 50 members strong now, and we're building some pretty ambitious projects this year.
            </p>
                    </li>
                    <li>

                        <p>
                            At Rice, I've served as a <b>TA</b> for a few CS courses (head TA for COMP 322 <b>Parallel Programming</b>,
                        and COMP 330 <b>Data Science</b>) and had an unfortunately short and hardly significant <b>undergrad research</b> stint in <b>deep learning</b>.
            </p>
                    </li>
                </ul>

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
