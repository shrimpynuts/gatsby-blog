import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import pic from "../../assets/me.jpg"

const About = ({ location }) => {

    return (
        <Layout location={location} title={"About"}>
            <SEO title="About" />
            <div>
                <img src={pic} alt="Me" style={{ float: "left", height: 300, width: "unset", paddingRight: 20 }} />
                <div>
                    <p>Hey, I'm Jonathan.</p>
                    <p>I'm going to be writing about anything that interests me. This blog is not meant for any particular audience, moreso treating this like a journal.</p>
                    <p>I'm from California, I study computer science at Rice University down in Houston, graduating in Spring 2021.</p>
                    {/* <p>If you're a recruiter, or just interested in that kind of thing, here's <b><a target="_blank" rel="noopener noreferrer" href={pdf}>my resume</a></b>
                (no guarantees on how up to date it is).</p> */}
                    <a href={"mailto:caimjonathan@gmail.com"}>email</a> &nbsp;
                    <a target="_blank" rel="noopener noreferrer" href={"https://twitter.com/jonathanmcai"}>twitter</a> &nbsp;
                    <a target="_blank" rel="noopener noreferrer" href={"https://github.com/jonathancai11"}>github</a> &nbsp;
                    <a target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/jonathan-cai/"}>linkedin</a> &nbsp;
                    <a target="_blank" rel="noopener noreferrer" href={"https://jonathancai.substack.com/"}>substack</a>
                </div>
            </div>

            <br/>
            <br/>

            <h6 className="main-heading">
                <Link to="/about/projects">Projects</Link> &nbsp;
                <Link to="/about/work">Work</Link>
            </h6>
        </Layout>
    )
}

export default About
