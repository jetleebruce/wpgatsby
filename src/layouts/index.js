/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Header from "../components/Header/index"
import MainMenu from '../components/Menu/MainMenu'
import "../layouts/index.css"

const Layout = ({ children, data}) => (
 

  
    <>
      <Header/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <MainMenu menu={data}/>
        {children}
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
 
)

Layout.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Layout


export const query = graphql`
         query LayoutQuery {
           allWordpressWpApiMenusMenusItems {
             edges {
               node {
                 id
                 name
                 items {
                   title
                   url
                   object_slug
                 }
               }
             }
           }
         }
       `