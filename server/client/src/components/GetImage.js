import React, { useState, useEffect } from 'react';
import { Cloudinary } from "@cloudinary/url-gen";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

const cld = new Cloudinary({
    cloud: {
        cloudName: 'dcgu0vi6u'
    }
});

function GetImage({ imageId, width, className }) {

    const [image, setImage] = useState(null);
    useEffect(() => {

        const myImage = cld.image(imageId)
        if (className === 'portfolio-image') {
            // myImage
            //     .resize(thumbnail())
        } else {
            myImage
                .resize(thumbnail().width(500).height(500).gravity(focusOn(FocusOn.face())))
        }
        const url = myImage.toURL()
        setImage(url)
    }, [imageId]);

    return (
        <div>
            {image && (
                <img
                    className={className}
                    width={width}
                    src={image}
                    alt={imageId} />
            )}
        </div>
    );
}

export default GetImage;