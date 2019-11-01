import * as React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  title: string
}

const Page: React.FC<Props> = ({ title }) => (
  <div style={{color: '#abc123'}}>
    <h2>{title}</h2>
    <p>
      This is the {title} page.
    </p>
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <Link to="/aboutUs">About Us</Link>
    </p>
    <p>
      <Link to="/contactUs">Contact Us</Link>
    </p>
  </div>
);

export default Page
