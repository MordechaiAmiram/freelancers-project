import React, { useState, useEffect } from 'react';
import { Cloudinary } from "@cloudinary/url-gen";
import {thumbnail} from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";
import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";

const cld = new Cloudinary({
    cloud: {
        cloudName: 'dcgu0vi6u'
    }
});

function GetImage({ imageId }) {

    const [image, setImage] = useState(null);
    console.log(imageId);
    useEffect(() => {

        const myImage = cld.image(imageId)
        myImage
            .resize(thumbnail().width(200).height(200).gravity(focusOn(FocusOn.face())))  // Crop the image, focusing on the face.
            .roundCorners(byRadius(50));    // Round the corners.
        const url = myImage.toURL()
        setImage(url)
    }, [imageId]);

    return (
        <div>
            {image && (
                <img
                    src={image} alt={imageId} />
            )}
        </div>
    );
}

export default GetImage;