'use client';

import { Button } from '@/components/ui/button';
import { Mouse } from 'lucide-react';
import React from 'react';
import { MyAvatar } from '@/components/MyAvatar';
import { useProfile } from '../hooks/useProfileService';
import Loading from '@/components/common/Loading';
import Link from 'next/link';

const HomeComponent = () => {
  const { data: profile, isLoading } = useProfile();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-8">
          {/* Avatar */}
          <div className="flex justify-center">
            <MyAvatar
              src={profile?.[0]?.imageUrl || ''}
              alt={profile?.[0]?.firstName || ''}
              size="xl"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in"> Hi, I&apos;m</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {' '}
                {profile?.[0]?.firstName || ''}
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {profile?.[0]?.lastName || ''}
              </span>
            </h1>

            <div className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
              {profile?.[0]?.description || ''}
            </div>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <Link href="/projects">
                <Button className="cosmic-button rounded-full px-8 py-6">
                  View My Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <Mouse className="h-10 w-10 text-primary" />
      </div>
    </section>
  );
};

export default HomeComponent;
