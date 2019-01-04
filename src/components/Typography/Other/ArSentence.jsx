import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import typographyOtherStyle from 'assets/jss/material-kit-react/components/typographyOtherStyle.jsx'

function ArSentence({ ...props }) {
    const { classes, children } = props
    return <div className={classes.defaultFontStyle + ' ' + classes.arSentence}>{children}</div>
}

ArSentence.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(typographyOtherStyle)(ArSentence)
