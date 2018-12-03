import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Welcome to my website</h1>
    <p>This is a sample site for the React Gatsby Blog</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
