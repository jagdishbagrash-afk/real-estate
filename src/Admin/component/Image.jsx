import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Image({ alt, src, classes, style }) {
    const [imageSRC, setImageSRC] = useState(src);

    // Handle broken image
    const imageLoader = () => {
        setImageSRC("/home/archbanner.jpg");
    };

    // Update image when src changes
    useEffect(() => {
        setImageSRC(src);
    }, [src]);

    return (
        <img
            className={"w-full !h-[150px] object-cover"}
            onError={imageLoader} // Fallback on error
            src={imageSRC } // Show either valid src or fallback
            alt={alt || 'Image'}
            loading="lazy"
            style={style}
        />
    );
}

Image.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string,
    classes: PropTypes.string,
    style: PropTypes.object
};

Image.defaultProps = {
    alt: 'Image',
    src: "/home/archbanner.jpg",
    classes: '',
    style: {}
};