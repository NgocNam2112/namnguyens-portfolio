'use client';

import React from 'react';
import { useAbout } from '../hooks/useAboutService';
import Loading from '@/components/common/Loading';
import PageWrapper from '@/components/common/wrapper/PageWrapper';
import AboutIntro from './AboutIntro';
import AboutExpertise from './AboutExpertise';

const AboutComponent = () => {
  const { data: about, isLoading } = useAbout();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <PageWrapper
      headline={
        <>
          About <span className="text-primary"> Me</span>
        </>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AboutIntro title={about?.[0]?.title} />
        <AboutExpertise />
      </div>
    </PageWrapper>
  );
};

export default AboutComponent;
