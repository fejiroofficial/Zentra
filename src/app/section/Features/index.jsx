import React from 'react';
import Image from 'next/image';
import TagLabel from '../../components/tagLabel'
import one from '../../asset/features/one.svg';
import two from '../../asset/features/two.svg';
import three from '../../asset/features/three.svg';
import four from '../../asset/features/four.svg';
import five from '../../asset/features/five.svg';
import six from '../../asset/features/six.svg';

export default function Features() {
  const images = [one, two, three, four, five, six];

  return (
    <div className="py-16 container mx-auto" id='features'>
      <div className="flex flex-col items-center text-black px-4">
        <TagLabel text="Features" />
        <h2 className="text-center max-w-3xl mt-4">
          Explore the All-in-One CRM Growth Platform
        </h2>
      </div>

      {/* Full-width grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 w-full px-4 sm:px-6 lg:px-12">
        {images.map((img, index) => (
          <div key={index} className="w-full h-full flex justify-center">
            <Image
              src={img}
              alt={`Feature image ${index + 1}`}
              className="w-full max-w-[418px] h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
