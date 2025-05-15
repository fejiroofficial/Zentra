import React from 'react';
import Image from 'next/image';
import TagLabel from '../../components/tagLabel'
import one from '../../asset/features/one.svg';
import two from '../../asset/features/two.svg';
import three from '../../asset/features/three.svg';
import four from '../../asset/features/four.svg';
import five from '../../asset/features/five.svg';
import six from '../../asset/features/six.svg';
import CardFeatures from '../../components/card';


export default function Features() {
  const cardDetails = [
    {
      id: 1,
      title: 'Centralized Customer Data',
      description: 'Store all customer data in one secure, organized place.',
      image: one,
    },
    {
      id:2,
      title: 'Automated Workflows',
      description: 'Automate tasks and communications to boost speed and efficiency.',
      image: two,
    },
    {
      id:3,
      title: 'Sales Automation',
      description: 'Automate routine sales tasks and workflows.',
      image: three,
    },
    {
      id:4,
      title: 'Smart Lead Scoring',
      description: 'Prioritize leads and track deal progress with visual pipelines.',
      image: four,
    },
    {
      id:5,
      title: 'Seamless Integrations',
      description: 'Connect apps easily to streamline daily tasks and communication.',
      image: five,
    },
    {
      id:6,
      title: 'Scalability for Teams',
      description: 'Works perfectly for startups, agencies, or enterprise-level teams.',
      image: six,
    },
  ];


  return (
    <div className="py-16 container mx-auto" id='features'>
      <div className="flex flex-col items-center text-black px-4">
        <TagLabel text="Features" />
        <h2 className="text-center max-w-3xl mt-4">
          Explore the All-in-One CRM Growth Platform
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 w-full px-4 sm:px-6 lg:px-12">
        {cardDetails.map((card, id) => (
          <div key={id} className="w-full h-full flex justify-center">
            <CardFeatures 
              tittle={card.title}
              description={card.description}
              image={card.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
