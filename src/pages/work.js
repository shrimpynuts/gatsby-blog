import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const jobs = [
  {
    company: "Alias",
    link: "https://www.alias.co/",
    location: "San Francisco, CA",
    logo: "https://i.imgur.com/cVCSKPw.png",
    role: "Founding Engineer",
    time: "January 2021 - ?",
    description:
      "I re-architected the codebase, and was the sole developer on major product features. Recruited and managed 2 engineers.",
  },
  {
    company: "Facebook",
    link: "https://www.facebook.com/",
    location: "Menlo Park, CA",
    logo:
      "https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512",
    role: "Software Engineer Intern",
    time: "June 2020 - August 2020",
    description:
      "I improved the efficiency of a few of their backend  \
    network services by a smidget, which turns out to scale quite nicely \
     when multiplied across billions of users.",
  },
  {
    company: "RiceApps",
    link: "https://riceapps.org/",
    location: "Houston, TX",
    logo: "https://riceapps.org/static/media/logo_color_light.7d03c94d.png",
    role: "President",
    time: "August 2018 - March 2021",
    description:
      "I lead this software development club of ~50 members to take on some cool projects.",
  },
  {
    company: "JPMorgan",
    link: "https://jpmorgan.com/",
    location: "Houston, TX",
    logo: "https://g.foolcdn.com/art/companylogos/square/jpm.png",
    role: "Software Engineer Intern",
    time: "June 2019 - August 2019",
    description:
      "I built data modeling tools to help them finance loans and \
      bonds. Business-ey stuff that will dry your eyes out.",
  },
  {
    company: "Sihua Technologies",
    link: "https://sihuatech.com/",
    location: "Cupertino, CA",
    logo:
      "https://media-exp3.licdn.com/dms/image/C510BAQF-noYtnx0hog/company-logo_200_200/0/1519872962884?e=2159024400&v=beta&t=1rCyf2r9_ff5NK87Ziu_KJIN0CuzS-OK6N0G31SDDEU",
    role: "Software Engineer Intern",
    time: "June 2018 - August 2018",
    description:
      "I improved their server deployment times signficantly (~70%).",
  },
  {
    company: "Rice University",
    link: "https://rice.edu/",
    location: "Houston, TX",
    logo:
      "https://cdn.freebiesupply.com/logos/large/2x/rice-university-1-logo-png-transparent.png",
    role: "Head TA and Undergraduate Researcher",
    time: "August 2019 - March 2020",
    description:
      "I helped teach a few CS courses (head TA for \
      Parallel Programming, and Data Science) and had a short undergrad \
      research stint in deep learning.",
  },
  {
    company: "CoderDojo",
    link: "https://coderdojo.com/",
    location: "Saratoga, CA",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/CoderDojo_Logo.png",
    role: "Teacher",
    time: "August 2018 - July 2018",
    description: "I helped teach some young kids programming.",
  },
]

const Work = ({ data, location }) => {
  return (
    <Layout location={location} title={"Work"}>
      <SEO title="Work" />
      <h1>Work</h1>
      <div className="section-content">
        {jobs.map((job, i) => {
          return (
            <div className="job" key={i}>
              <div className="job-header">
                <a href={job.link} target="_blank">
                  <img
                    className="job-logo"
                    src={job.logo}
                    alt={`${job.company} logo`}
                  />
                </a>
                <div className="job-details">
                  <b>{job.role} </b> @{" "}
                  <a href={job.link} target="_blank">
                    <b>{job.company}</b>
                  </a>
                  <br />
                  <small>
                    {job.location} | {job.time}
                  </small>
                </div>
              </div>
              <div className="job-description">{job.description}</div>
            </div>
          )
        })}
        <style jsx>{`
          .job-logo {
            width: 40px;
            display: inline-block;
          }
          .job-details {
            margin: 0px 12px;
            display: inline-block;
          }
          .job-description {
            display: block;
          }
          .job-header {
            display: flex;
          }
          .job {
            margin: 16px 0px;
          }
        `}</style>
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
