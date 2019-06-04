import { container, title } from 'assets/jss/material-kit-react.jsx'

const landingPageStyle = {
  container: {
    zIndex: '12',
    ...container
  },
  section: {
    textAlign: 'center'
  },
  title: {
    ...title,
    display: 'inline-block',
    position: 'relative',
    marginTop: '30px',
    minHeight: '32px',
    color: '#FFFFFF',
    textDecoration: 'none'
  },
  socialIcons: {
    fontSize: 60
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: '1.313rem',
    maxWidth: '500px',
    margin: '10px auto 0'
  },
  main: {
    paddingTop: 20,
    paddingBottom: 40,
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3'
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    borderRadius: '6px',
    boxShadow: '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  },
  h2: {
    fontSize: 23,
    fontWeight: 500,
    marginTop: 0,
    marginBottom: 20
  },
  icon: {
    justifyContent: 'center',
    display: 'flex',
    fontSize: 70,
    marginBottom: 20
  },
  desc: {
    fontSize: 15,
    marginBottom: 15,
    lineHeight: 1.4
  }
}

export default landingPageStyle
