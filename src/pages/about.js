import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import pic from "../assets/me.jpg"

const AboutPage = ({ location }) => {

    return (
        <Layout location={location} title={"About"}>
            <SEO title="About" />

            <div style={{float: "left", display: "inline-block"}}>
                <img src={pic} style={{ width: 220 }} />
            </div>

            <div style={{float: "right", display: "inline-block"}}>
                <p>Hey, I'm Jonathan.</p>
                <p>I'm going to be writing about anything that interests me. Not for any particular audience, moreso treating this like a journal.</p>
                <p>I'm from California, I study computer science at Rice University, graduating in Spring 2021.</p>
                {/* <p>If you're a recruiter, or just interested in that kind of thing, here's <b><a target="_blank" rel="noopener noreferrer" href={pdf}>my resume</a></b>
                (no guarantees on how up to date it is).</p> */}
                <a href={"mailto:caimjonathan@gmail.com"}>email</a><br />
                <a target="_blank" rel="noopener noreferrer" href={"https://twitter.com/jonathanmcai"}>twitter</a><br />
                <a target="_blank" rel="noopener noreferrer" href={"https://github.com/jonathancai11"}>github</a><br />
                <a target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/jonathan-cai/"}>linkedin</a><br />
                <a target="_blank" rel="noopener noreferrer" href={"https://jonathancai.substack.com/"}>substack</a>
            </div>
        </Layout>
    )
}

export default AboutPage
