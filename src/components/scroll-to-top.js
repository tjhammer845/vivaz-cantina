import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import IconButton from "@material-ui/core/IconButton"
import { variables } from "../utils/variables"

const Scroll = ({ showBelow }) => {
  const classes = useStyles()

  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })

  return (
    <div>
      {show && (
        <IconButton
          onClick={handleClick}
          className={classes.toTop}
          aria-label="to top"
          component="span"
        >
          <ExpandLessIcon />
        </IconButton>
      )}
    </div>
  )
}
export default Scroll

const useStyles = makeStyles(theme => ({
  toTop: {
    zIndex: 100,
    position: "fixed",
    bottom: "8.5vh",
    backgroundColor: variables.transOrange,
    color: "white",
    "&:hover, &.Mui-focusVisible": {
      transition: "0.3s",
      color: "white",
      backgroundColor: variables.bloodOrange,
    },
    [theme.breakpoints.up("xs")]: {
      right: "2%",
      backgroundColor: variables.transOrange,
    },
    [theme.breakpoints.up("lg")]: {
      right: "2%",
    },
  },
}))
