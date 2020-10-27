import React from "react";
import Image from 'next/image';

class PostThumbnail extends React.Component {
  render() {
    const { thumbnailImage, altText } = this.props;
    return (
      <Image
        src={thumbnailImage || "/default-image.png"}
        width={150}
        height={150}
        alt={altText}
      />
    );
  }
}

export default PostThumbnail;
