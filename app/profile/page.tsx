'use client';

import { useState } from 'react';
import { User, Settings2, Award, ChefHat, TrendingUp } from 'lucide-react';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'settings'>('overview');

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-surface border-b border-primary/10">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-6">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-1">@platepal_user</h1>
              <p className="text-fg/70">Member since January 2024</p>
            </div>

            {/* Connect Wallet Button */}
            <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200">
              Connect Wallet
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'overview'
                  ? 'bg-primary text-white'
                  : 'text-fg/70 hover:text-fg'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'settings'
                  ? 'bg-primary text-white'
                  : 'text-fg/70 hover:text-fg'
              }`}
            >
              Settings
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' ? <OverviewTab /> : <SettingsTab />}
      </div>
    </div>
  );
}

function OverviewTab() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard icon={<ChefHat className="w-6 h-6" />} label="Recipes Created" value="24" />
        <StatCard icon={<Award className="w-6 h-6" />} label="Badges Earned" value="8" />
        <StatCard icon={<TrendingUp className="w-6 h-6" />} label="Reputation" value="850" />
        <StatCard icon={<User className="w-6 h-6" />} label="Followers" value="156" />
      </div>

      {/* Recent Activity */}
      <div className="bg-surface rounded-lg p-6 border border-primary/10">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <ActivityItem
            icon={<Award className="w-5 h-5 text-primary" />}
            title="Earned Veggie Virtuoso Badge"
            time="2 days ago"
          />
          <ActivityItem
            icon={<ChefHat className="w-5 h-5 text-primary" />}
            title="Created Quinoa Power Bowl recipe"
            time="5 days ago"
          />
          <ActivityItem
            icon={<TrendingUp className="w-5 h-5 text-primary" />}
            title="Joined Protein Power Week challenge"
            time="1 week ago"
          />
        </div>
      </div>
    </div>
  );
}

function SettingsTab() {
  return (
    <div className="space-y-6">
      {/* Dietary Preferences */}
      <div className="bg-surface rounded-lg p-6 border border-primary/10">
        <h2 className="text-xl font-semibold mb-4">Dietary Preferences</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Diet Type</label>
            <select className="w-full px-4 py-2 bg-bg border border-primary/20 rounded-lg focus:outline-none focus:border-primary">
              <option>Balanced</option>
              <option>Vegetarian</option>
              <option>Vegan</option>
              <option>Keto</option>
              <option>Paleo</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Allergies</label>
            <input
              type="text"
              placeholder="e.g., nuts, dairy, gluten"
              className="w-full px-4 py-2 bg-bg border border-primary/20 rounded-lg focus:outline-none focus:border-primary"
            />
          </div>
        </div>
      </div>

      {/* Fitness Goals */}
      <div className="bg-surface rounded-lg p-6 border border-primary/10">
        <h2 className="text-xl font-semibold mb-4">Fitness Goals</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Primary Goal</label>
            <select className="w-full px-4 py-2 bg-bg border border-primary/20 rounded-lg focus:outline-none focus:border-primary">
              <option>Weight Loss</option>
              <option>Muscle Gain</option>
              <option>Maintenance</option>
              <option>Athletic Performance</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Daily Calorie Target</label>
            <input
              type="number"
              placeholder="2000"
              className="w-full px-4 py-2 bg-bg border border-primary/20 rounded-lg focus:outline-none focus:border-primary"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <button className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200">
        Save Settings
      </button>
    </div>
  );
}

function StatCard({ icon, label, value }: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-surface rounded-lg p-6 border border-primary/10">
      <div className="text-primary mb-3">{icon}</div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-sm text-fg/60">{label}</div>
    </div>
  );
}

function ActivityItem({ icon, title, time }: {
  icon: React.ReactNode;
  title: string;
  time: string;
}) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-bg/50 transition-colors duration-200">
      <div className="mt-1">{icon}</div>
      <div className="flex-1">
        <div className="font-medium">{title}</div>
        <div className="text-sm text-fg/60">{time}</div>
      </div>
    </div>
  );
}
