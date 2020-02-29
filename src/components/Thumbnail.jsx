import React from 'react'
import PropTypes from 'prop-types'

const Thumbnail = ({src})=> {

  return(
    <img src={src}
      style = {{
        width:'300px',
        height:'300px'
      }} />
  );
}

Thumbnail.propTypes = {
  src: PropTypes.string.isRequired
}

export default Thumbnail;