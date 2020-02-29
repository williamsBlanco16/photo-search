import React from 'react'
import PropTypes from 'prop-types'

import Thumbail from './Thumbnail'

const Thumbnails = ({photos}) => {

  return(
    <div>
      {
        photos.map( photo => (
          <div 
            key={photo.id}
            style={{
              float:'left',
              marginRight:'10px',
              marginBottom:'10px'
            }}>
            <Thumbail
              src={photo.urls.small}
            />

          </div>
        ))
      }

    </div>
  );
}

Thumbnails.propTypes = {
  photos: PropTypes.array.isRequired
}

export default Thumbnails;