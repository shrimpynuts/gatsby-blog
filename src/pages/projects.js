import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import projectData from '../data/projects.json';


const customColors = {
  featured: "#559977",
}

// https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
function shadeColor(color, percent) {

  var R = parseInt(color.substring(1, 3), 16);
  var G = parseInt(color.substring(3, 5), 16);
  var B = parseInt(color.substring(5, 7), 16);

  R = parseInt(R * (100 + percent) / 100);
  G = parseInt(G * (100 + percent) / 100);
  B = parseInt(B * (100 + percent) / 100);

  R = (R < 255) ? R : 255;
  G = (G < 255) ? G : 255;
  B = (B < 255) ? B : 255;

  var RR = ((R.toString(16).length === 1) ? "0" + R.toString(16) : R.toString(16));
  var GG = ((G.toString(16).length === 1) ? "0" + G.toString(16) : G.toString(16));
  var BB = ((B.toString(16).length === 1) ? "0" + B.toString(16) : B.toString(16));

  return "#" + RR + GG + BB;
}

// https://stackoverflow.com/questions/3426404/create-a-hexadecimal-colour-based-on-a-string-with-javascript
var stringToColour = function (str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = '#';
  for (i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}

function getColor(tag) {
  return customColors[tag] || stringToColour(tag);
}

function Tag({ tool, count }) {
  return <span className="tag"
    style={{
      backgroundColor: shadeColor(getColor(tool), -10),
    }}>{count ? count.toString() + " - " + tool : tool}</span>
}


const Projects = ({ data, location }) => {
  let tools = projectData.flatMap((project) => project.stack.split(", "));
  var toolCounts = {};

  for (var i = 0; i < tools.length; i++) {
    var num = tools[i];
    toolCounts[num] = toolCounts[num] ? toolCounts[num] + 1 : 1;
  }

  return (
    <Layout location={location} title={"Projects"}>
      <SEO title="Projects" />
      <h1>Projects</h1>
      <div>
        <p>Below is all of the (software) projects I've ever worked on (excluding industry/coursework).</p>

        {/* <p>Evidently, I've done a lot of things that I now look back on as dumb: stuff
            that provides no value to me or other people, stuff that I learned absolutely nothing from, etc.</p> */}

        {/* <p>If "results" or "lessons" is empty, that means it had no quantitative results
                (likely due to not launching or having users) or I learned nothing from the experience of building the damn thing!</p> */}

        <p>Interestingly, there's not much correlation between development time and the results or lessons learned.</p>

        <p>In my experience, it's very possible to learn 10x more and see 10x results from a week-long project vs a year-long project.</p>

        <p>That being said, I do think that time might have an magnifying effect on the lessons I've learned (if any), mainly because I've felt
                like more time has been wasted, and so the burn stings a bit more.</p>

        <p>But before we get to the projects, here are metrics for a few of my latest!</p>
        <div class="resp-container">
          <iframe
          title="Project metrics"
            width="100%"
            className="resp-iframe"
            // height="50%"
            src="https://datastudio.google.com/embed/reporting/1b7ba379-ca6e-4043-a458-dfdb6850828d/page/PJyfB"
            style={{ overflowY: "none", height: "500px" }} scrolling="no"></iframe>
        </div>

        <p>But of course, the goal for most of these projects were not users (Goodhart's Law feels relevant).
                But it's still helpful to keep an eye on traffic, it's at least part of the measurement of success.</p>



        <p>Here is a list of all the <b>tools/languages/frameworks</b> used by frequency:</p>
        <div style={{ overflowWrap: "break-word" }}>
          {Object.entries(toolCounts).sort((a, b) => b[1] - a[1]).map((tool, i) => <Tag count={tool[1]} key={i} tool={tool[0]} />)}
        </div>
        <br />


        <hr />
        {projectData.map((project, i) => {
          return (
            <div>
              <div key={i} className="single-project">
                <div className="single-project-header">
                  {project.icon ?
                    <a className="no-highlight" target="_blank" rel="noopener noreferrer" href={project.link}>
                      <img alt={project.name} src={project.icon} height="50" style={{ borderRadius: 7, maxWidth: "100%", width: "unset"}} />
                    </a> : <br />
                  }
                  <div>
                    <h3>{project.name} </h3> {project.organization && <h5>{"for " + project.organization}</h5>}
                    <p><a target="_blank" rel="noopener noreferrer" href={project.link}>{project.link_display}</a> </p>
                  </div>
                  <p>{project.date}</p>
                  <p>{project.dev_time}</p>
                </div>
                <div className="single-project-body">
                  <p>{project.description}</p>
                  <div style={{ overflowWrap: "break-word" }}>
                    {/* <div style={{whiteSpace: "pre-wrap"}}> */}
                    {project.stack.split(", ").map((tool, i) => {
                      return <Tag key={i} tool={tool} />
                    })}
                  </div>
                  <p><b className="no-highlight">Status:</b> {project.status}</p>
                  <p><b className="no-highlight">Results:</b> {project.results}</p>
                  <p><b className="no-highlight">Lessons:</b> {project.lessons}</p>
                </div>
              </div>
              <hr />
            </div>);
        })}
      </div>
    </Layout>
  )
}

export default Projects

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
