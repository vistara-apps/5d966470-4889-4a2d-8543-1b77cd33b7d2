'use client';

import { Award, Trophy, Star, Sparkles } from 'lucide-react';
import { mockBadges } from '@/lib/mockData';
import type { NFTBadge } from '@/lib/types';

export default function BadgesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-surface border-b border-primary/10">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">NFT Badge Collection</h1>
          </div>

          <p className="text-lg text-fg/70">
            Your onchain achievements and nutritional milestones
          </p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            icon={<Trophy className="w-6 h-6" />}
            label="Total Badges"
            value={mockBadges.length.toString()}
            color="text-primary"
          />
          <StatCard
            icon={<Star className="w-6 h-6" />}
            label="Reputation Score"
            value="850"
            color="text-yellow-500"
          />
          <StatCard
            icon={<Sparkles className="w-6 h-6" />}
            label="Challenges Completed"
            value="12"
            color="text-purple-500"
          />
        </div>

        {/* Badge Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockBadges.map(badge => (
            <BadgeCard key={badge.badgeId} badge={badge} />
          ))}

          {/* Locked Badges */}
          <LockedBadgeCard title="Protein Pro" description="Complete Protein Power Week" />
          <LockedBadgeCard title="Eco Chef" description="Complete Zero Waste Challenge" />
          <LockedBadgeCard title="Meal Prep Master" description="Prep 30 meals in advance" />
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, color }: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="bg-surface rounded-lg p-6 border border-primary/10">
      <div className={`${color} mb-3`}>{icon}</div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-sm text-fg/60">{label}</div>
    </div>
  );
}

function BadgeCard({ badge }: { badge: NFTBadge }) {
  return (
    <div className="group bg-surface rounded-lg overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-200 hover:shadow-lg">
      {/* Badge Image */}
      <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Award className="w-20 h-20 text-primary/60 group-hover:scale-110 transition-transform duration-200" />
        </div>
      </div>

      {/* Badge Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{badge.type}</h3>
        <p className="text-sm text-fg/70 mb-3">{badge.achievementCriteria}</p>
        
        <div className="flex items-center justify-between text-xs text-fg/60">
          <span>Minted</span>
          <span>{new Date(badge.mintTimestamp).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}

function LockedBadgeCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-surface rounded-lg overflow-hidden border border-primary/10 opacity-60">
      {/* Locked Badge Image */}
      <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Award className="w-20 h-20 text-fg/20" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-bg/50 backdrop-blur-sm">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-surface flex items-center justify-center">
              <span className="text-2xl">🔒</span>
            </div>
            <div className="text-sm font-medium">Locked</div>
          </div>
        </div>
      </div>

      {/* Badge Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-fg/70">{description}</p>
      </div>
    </div>
  );
}
