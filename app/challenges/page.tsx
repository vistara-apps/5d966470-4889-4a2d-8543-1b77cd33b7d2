'use client';

import { useState } from 'react';
import { Trophy, Calendar, Users as UsersIcon, Award, TrendingUp } from 'lucide-react';
import { mockChallenges } from '@/lib/mockData';
import type { Challenge } from '@/lib/types';

export default function ChallengesPage() {
  const [filter, setFilter] = useState<'all' | 'active' | 'upcoming'>('all');

  const filteredChallenges = mockChallenges.filter(challenge => {
    if (filter === 'all') return true;
    return challenge.status === filter;
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-surface border-b border-primary/10">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Proof-of-Plate Challenges</h1>
          </div>

          <p className="text-lg text-fg/70 mb-6">
            Join challenges, share your healthy meals, and earn onchain NFT badges
          </p>

          {/* Filter Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                filter === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-bg text-fg/70 hover:bg-bg/80 border border-primary/20'
              }`}
            >
              All Challenges
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                filter === 'active'
                  ? 'bg-primary text-white'
                  : 'bg-bg text-fg/70 hover:bg-bg/80 border border-primary/20'
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                filter === 'upcoming'
                  ? 'bg-primary text-white'
                  : 'bg-bg text-fg/70 hover:bg-bg/80 border border-primary/20'
              }`}
            >
              Upcoming
            </button>
          </div>
        </div>
      </div>

      {/* Challenges Grid */}
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredChallenges.map(challenge => (
            <ChallengeCard key={challenge.challengeId} challenge={challenge} />
          ))}
        </div>

        {filteredChallenges.length === 0 && (
          <div className="text-center py-20">
            <Trophy className="w-16 h-16 text-fg/20 mx-auto mb-4" />
            <p className="text-lg text-fg/60">No challenges found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ChallengeCard({ challenge }: { challenge: Challenge }) {
  const isActive = challenge.status === 'active';
  const isUpcoming = challenge.status === 'upcoming';

  return (
    <div className="bg-surface rounded-lg overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-200 hover:shadow-lg">
      {/* Challenge Header */}
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Trophy className="w-16 h-16 text-primary/40" />
        </div>
        <div className="absolute top-3 right-3">
          <div className={`px-3 py-1 backdrop-blur-sm rounded-full text-sm font-semibold ${
            isActive ? 'bg-green-500/80 text-white' :
            isUpcoming ? 'bg-blue-500/80 text-white' :
            'bg-gray-500/80 text-white'
          }`}>
            {challenge.status.toUpperCase()}
          </div>
        </div>
      </div>

      {/* Challenge Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{challenge.name}</h3>
        <p className="text-fg/70 mb-4">{challenge.description}</p>

        {/* Challenge Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-primary" />
            <div>
              <div className="text-fg/60">Duration</div>
              <div className="font-medium">
                {new Date(challenge.startDate).toLocaleDateString()} - {new Date(challenge.endDate).toLocaleDateString()}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <UsersIcon className="w-4 h-4 text-primary" />
            <div>
              <div className="text-fg/60">Participants</div>
              <div className="font-medium">{challenge.participants}</div>
            </div>
          </div>
        </div>

        {/* Reward */}
        <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg mb-4">
          <Award className="w-5 h-5 text-primary" />
          <div>
            <div className="text-sm text-fg/60">Reward</div>
            <div className="font-semibold text-primary">{challenge.reward}</div>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-fg/60">Required Proofs</span>
            <span className="font-medium">{challenge.requiredProofs}</span>
          </div>
          <div className="h-2 bg-bg rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: '0%' }} />
          </div>
        </div>

        {/* Action Button */}
        <button
          disabled={!isActive}
          className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
            isActive
              ? 'bg-primary text-white hover:bg-primary/90'
              : 'bg-surface text-fg/40 cursor-not-allowed border border-primary/20'
          }`}
        >
          {isActive ? 'Join Challenge' : isUpcoming ? 'Coming Soon' : 'Completed'}
        </button>
      </div>
    </div>
  );
}
