import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ location }) => {

    return (
        <Layout location={location} title={"About"}>
            <SEO title="About" />
            <p>Hi, I'm <b>Jonathan</b>! 👋</p>
            <p>I'm still exploring things, but I've built a lot for the web, and I'm now trying to write about my experiences/lessons.</p>
            <p>I study <b>computer science</b> at <b>Rice University</b>, graduating in Spring 2021.</p>
            <p>Currently thinking about 💭:</p>
            <ul>
                <li>How do you build thriving communities online (eg HackerNews, ProductHunt)?</li>
                <li>What are the best ways to improve your ability to write (English, not code)?</li>
            </ul>
            {/* <p>If you're a recruiter, or just interested in that kind of thing, here's <b><a target="_blank" rel="noopener noreferrer" href={pdf}>my resume</a></b>
                (no guarantees on how up to date it is).</p> */}
        </Layout>
    )
}

export default AboutPage
