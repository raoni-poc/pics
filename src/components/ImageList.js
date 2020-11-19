import React from 'react';

const ImageList = (props) => {
    const images = props.images.map((images) => {
        return <img alt={images.description} key={images.id} src={images.urls.regular} />
    })
    return <div>{images}</div>;
}

export default ImageList;