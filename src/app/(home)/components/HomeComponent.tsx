'use client';

import { Button } from '@/components/ui/button';
import { Mouse } from 'lucide-react';
import React from 'react';
import { MyAvatar } from '@/components/MyAvatar';
import { useProfile } from '../hooks/useProfileService';
import Loading from '@/components/common/Loading';
import Link from 'next/link';
import TextWrapper from '@/components/common/wrapper/TextWrapper';
import ContainerWrapper from '@/components/common/wrapper/ContainerWrapper';
import SelectionWrapper from '@/components/common/wrapper/SelectionWrapper';

const HomeComponent = () => {
  const { data: profile, isLoading } = useProfile();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SelectionWrapper
      padding="none"
      container={false}
      className="relative min-h-screen flex items-center justify-center"
    >
      <ContainerWrapper
        size="lg"
        padding="md"
        maxWidth="3xl"
        className="text-center z-10"
      >
        <div className="space-y-6 sm:space-y-8">
          {/* Avatar */}
          <div className="flex justify-center">
            <MyAvatar
              src={profile?.[0]?.imageUrl || ''}
              alt={profile?.[0]?.firstName || ''}
              size="xl"
            />
          </div>

          {/* Content */}
          <div className="space-y-4 sm:space-y-6">
            <TextWrapper
              variant="h1"
              weight="bold"
              className="tracking-tight opacity-0 animate-fade-in text-center"
            >
              <span>Hi, I&apos;m</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1 ml-2">
                {profile?.[0]?.firstName || ''}
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {profile?.[0]?.lastName || ''}
              </span>
            </TextWrapper>

            <TextWrapper
              variant="p"
              size="lg"
              color="muted"
              className="max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 text-center"
            >
              {profile?.[0]?.description || ''}
            </TextWrapper>

            <div className="pt-2 sm:pt-4 opacity-0 animate-fade-in-delay-4">
              <Link href="/projects">
                <Button className="cosmic-button rounded-full px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base">
                  View My Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </ContainerWrapper>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <Mouse className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
      </div>
    </SelectionWrapper>
  );
};

export default HomeComponent;
