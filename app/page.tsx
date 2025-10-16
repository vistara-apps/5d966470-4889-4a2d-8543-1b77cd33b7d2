'use client';

import { useEffect, useState } from 'react';
import { ChefHat, Trophy, Sparkles, Users } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <ChefHat className="w-16 h-16 text-primary" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
        <div className="relative max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-fg/80">AI-Powered Meal Planning on Base</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Your Personal
              <span className="block text-primary mt-2">Meal Planning Companion</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-fg/70 max-w-2xl mx-auto">
              Discover personalized recipes, join food challenges, and earn onchain rewards for healthy eating habits.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/recipes"
                className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get My Daily Plate
              </Link>
              <Link
                href="/challenges"
                className="px-8 py-4 bg-surface text-fg rounded-lg font-semibold hover:bg-surface/80 transition-all duration-200 border border-primary/20"
              >
                View Challenges
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<ChefHat className="w-8 h-8" />}
            title="AI Recipe Generation"
            description="Get personalized recipes based on your pantry, diet, and fitness goals"
            href="/recipes"
          />
          <FeatureCard
            icon={<Trophy className="w-8 h-8" />}
            title="Proof-of-Plate Challenges"
            description="Join challenges, share your meals, and earn onchain rewards"
            href="/challenges"
          />
          <FeatureCard
            icon={<Sparkles className="w-8 h-8" />}
            title="NFT Badges"
            description="Collect unique badges for your healthy eating achievements"
            href="/badges"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-surface rounded-lg p-8 border border-primary/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard label="Active Users" value="2.4K" />
            <StatCard label="Recipes Shared" value="12.5K" />
            <StatCard label="Challenges" value="48" />
            <StatCard label="NFTs Minted" value="3.2K" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg p-12 text-center border border-primary/20">
          <Users className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Join the PlatePal Community</h2>
          <p className="text-lg text-fg/70 mb-8 max-w-2xl mx-auto">
            Connect with thousands of health-conscious food lovers, share your culinary journey, and earn rewards for your achievements.
          </p>
          <Link
            href="/profile"
            className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200"
          >
            Create Your Profile
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, href }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="group p-6 bg-surface rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-200 hover:shadow-lg cursor-pointer h-full">
        <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-200">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-fg/70">{description}</p>
      </div>
    </Link>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-primary mb-2">{value}</div>
      <div className="text-sm text-fg/60">{label}</div>
    </div>
  );
}
