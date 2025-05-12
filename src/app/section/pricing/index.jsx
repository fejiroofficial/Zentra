'use client';

import React, { useState } from 'react';
import PriceCard from '@/app/components/price';
import TagLabel from '@/app/components/tagLabel';

export default function Pricing() {
  const [selectedCard, setSelectedCard] = useState('Professional Plan');
  const [billingCycle, setBillingCycle] = useState('month'); // default is a string

  const handleCardClick = (cardTitle) => {
    setSelectedCard(cardTitle);
  };

  const pricingData = {
    month: [
      {
        title: 'Starter Plan',
        amount: '$50',
        duration: 'month',
        description:
          'Perfect for individuals or small teams just getting started with CRM.',
        listItems: [
          'Contact and deal management',
          'Email tracking and templates',
          'Basic pipeline customization',
          'Task and activity tracking',
          'Integration with Gmail/Outlooks',
        ],
      },
      {
        title: 'Professional Plan',
        amount: '$70',
        duration: 'month',
        description:
          'Built for growing businesses that need automation and deeper insights.',
        listItems: [
          'All features in “Starter Plan”',
          'Advanced sales automation',
          'Custom reporting and dashboards',
          'Workflow automation builder',
          'Multi-pipeline management',
          'Lead scoring and segmentation',
        ],
      },
      {
        title: 'Enterprise Plan',
        amount: '$150',
        duration: 'month',
        description:
          'For large teams that need full control, customization, and premium support.',
        listItems: [
          'All features in “Professional Plan”',
          'Custom roles and permissions',
          'Team hierarchy and user access control',
          'Dedicated account manager',
          'Predictive lead analytics',
        ],
      },
    ],
    year: [
      {
        title: 'Starter Plan',
        amount: '$500',
        duration: 'year',
        description:
          'Perfect for individuals or small teams just getting started with CRM.',
        listItems: [
          'Contact and deal management',
          'Email tracking and templates',
          'Basic pipeline customization',
          'Task and activity tracking',
          'Integration with Gmail/Outlooks',
        ],
      },
      {
        title: 'Professional Plan',
        amount: '$700',
        duration: 'year',
        description:
          'Built for growing businesses that need automation and deeper insights.',
        listItems: [
          'All features in “Starter Plan”',
          'Advanced sales automation',
          'Custom reporting and dashboards',
          'Workflow automation builder',
          'Multi-pipeline management',
          'Lead scoring and segmentation',
        ],
      },
      {
        title: 'Enterprise Plan',
        amount: '$1500',
        duration: 'year',
        description:
          'For large teams that need full control, customization, and premium support.',
        listItems: [
          'All features in “Professional Plan”',
          'Custom roles and permissions',
          'Team hierarchy and user access control',
          'Dedicated account manager',
          'Predictive lead analytics',
        ],
      },
    ],
  };

  // Extra safeguard to avoid runtime errors
  const currentPlans = pricingData[billingCycle] || [];

  return (
    <div className='container mx-auto'>
      <div className="flex flex-col items-center gap-6">
        <TagLabel text="Pricing" />
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-center max-w-2xl mt-4 text-black leading-tight">
          Flexible Plans for Businesses of All Sizes
        </h2>
        <div className="flex justify-center space-x-4 border border-[#080035] max-w-[222px] rounded-[40px] p-2 ">
        <button
          onClick={() => setBillingCycle('month')}
          className={`px-4 py-2 rounded-full ${
            billingCycle === 'month' ? 'bg-[#080035] text-white' : 'text-[#626262] text-[18px] font-medium'
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBillingCycle('year')}
          className={`px-4 py-2 rounded-full ${
            billingCycle === 'year' ? 'bg-[#080035] text-white' : ' text-[#626262] text-[18px] font-medium'
          }`}
        >
          Yearly
        </button>
      </div>
      </div>

      

      <div className="grid xl:flex items-center gap-16 py-16 px-6 xl:gap-8 xl:flex-row xl:justify-center">
        {currentPlans.map((plan, index) => (
          <div key={index} className="cursor-pointer" onClick={() => handleCardClick(plan.title)}>
            <PriceCard
              title={plan.title}
              amount={plan.amount}
              duration={plan.duration}
              description={plan.description}
              listItems={plan.listItems}
              buttonLabel="Start Free Trial"
              variant={selectedCard === plan.title ? 'white' : 'default'}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
