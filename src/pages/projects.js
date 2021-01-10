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
        <table className="project-table">
          <tr>
            <th></th>
            <th>Name</th>
            <th>Date</th>
            <th>Description</th>
            <th>Status</th>
            <th>Link</th>
            {/* <th>Results</th> */}
          </tr>
          {projectData.map((project, i) => {
            return (
              <tr>
                <td>
                  <img src={project.icon} style={{ width: "30px", marginRight: "10px" }} />
                </td>
                <td>{project.name}</td>
                <td>{project.date}</td>
                <td>{project.description}</td>
                <td>{project.status}</td>
                <td>
                  <a href={project.link} target="_blank">{project.link_display}</a>
                </td>
                {/* <td>{project.results}</td> */}
              </tr>
            );
          })}
        </table>

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
