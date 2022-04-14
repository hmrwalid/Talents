import React, { useEffect, useState } from 'react';
import { Image} from 'cloudinary-react'


 function Photo() {
    const [imageIds, setImageIds] = useState();
    const loadImages = async () => {
        try {
            const res = await fetch('/api/images');
            const data = await res.json();
            console.log(data)
            setImageIds(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadImages();
    }, []);
    return (
        <div>
            <div className="gallery">
                {imageIds &&
                    imageIds.map((imageId, index) => (
                        <Image
                            key={index}
                            cloudName="coud1996"
                            publicId={imageId}
                            width="200"
                            height="100"
                            crop="scale"
                        />
                    ))}
                    
            </div>
        </div>
    );
} 
export default Photo