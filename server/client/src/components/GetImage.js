import React, { useState, useEffect } from 'react';
import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({
    cloud: {
        cloudName: 'dcgu0vi6u'
    }
});

function GetImage({ imageId }) {

    const [image, setImage] = useState(null);

    useEffect(() => {
        const myImage = cld.image(imageId);
        const url = myImage.toURL()
        setImage(url)
    }, [imageId]);

    return (
        <div>
            {image && (
                <img src={image} alt={imageId} />
            )}
        </div>
    );
}

export default GetImage;