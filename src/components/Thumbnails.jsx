import React from 'react'
import PropTypes from 'prop-types'

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
            <img 
              src={photo.urls.small}
              alt=""
              style = {{
                width:'300px',
                height:'300px'
              }}
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