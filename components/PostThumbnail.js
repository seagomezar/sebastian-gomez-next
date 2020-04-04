import React from "react";

class PostThumbnail extends React.Component {

    render() {
        const {thumbnailImage, altText} = this.props
            return (
              <img
                src={thumbnailImage || "/default-image.png"}
                width="150px"
                className=""
                alt={altText}
              />
            );
    }
}


export default PostThumbnail;