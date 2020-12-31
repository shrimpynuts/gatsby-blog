import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import pic from "../../assets/me.jpg"
import resume from "../../assets/jonathan_cai_resume.pdf"

const About = ({ location }) => {

    return (
        <Layout location={location} title={"About"}>
            <SEO title="About" />
            <div>
                <img src={pic} alt="Me" style={{ float: "left", height: 200, width: "unset", paddingRight: 20 }} />
                <div>
                    <p>Hey, I'm Jonathan!</p>
                    <p>Just writing about anything that interests me.
                        I'd like to call this a blog because that's all the rave, but it's really more like a journal.</p>
                    <p>If I eventually find a niche, then I'll tailor this content much more. But for now, it'll look like random rambling.</p>
                    <p>I'm from California, I study computer science at Rice University in Houston, graduating in 2021.</p>
                    {/* <p>If you're a recruiter, or just interested in that kind of thing, here's <b><a target="_blank" rel="noopener noreferrer" href={pdf}>my resume</a></b>
                (no guarantees on how up to date it is).</p> */}
                    <a href={"mailto:caimjonathan@gmail.com"}>email</a> &nbsp;
                    <a target="_blank" rel="noopener noreferrer" href={"https://twitter.com/jonathanmcai"}>twitter</a> &nbsp;
                    <a target="_blank" rel="noopener noreferrer" href={"https://github.com/jonathancai11"}>github</a> &nbsp;
                    <a target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/jonathan-cai/"}>linkedin</a> &nbsp;
                    <a target="_blank" rel="noopener noreferrer" href={"https://jonathancai.substack.com/"}>substack</a> &nbsp;
                    <a target="_blank" rel="noopener noreferrer" href={resume}>resume</a>
                </div>
            </div>

            <br/>

            <h6 className="main-heading">
                <Link to="/about/projects">/about/projects</Link> <br/>
                <Link to="/about/work">/about/work</Link> <br/>
                <Link to="/about/read">/about/read</Link>
            </h6>
        </Layout>
    )
}

export default About
