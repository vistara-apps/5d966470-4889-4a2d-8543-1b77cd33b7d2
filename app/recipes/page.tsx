'use client';

import { useState } from 'react';
import { Search, Heart, Share2, Clock, Users as UsersIcon, Sparkles } from 'lucide-react';
import { mockRecipes } from '@/lib/mockData';
import type { Recipe } from '@/lib/types';

export default function RecipesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(mockRecipes.flatMap(r => r.tags)));

  const filteredRecipes = mockRecipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         recipe.ingredients.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTag = !selectedTag || recipe.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-surface border-b border-primary/10">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">AI Recipe Discovery</h1>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-fg/40" />
            <input
              type="text"
              placeholder="Search recipes or ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-bg border border-primary/20 rounded-lg focus:outline-none focus:border-primary text-fg placeholder:text-fg/40"
            />
          </div>

          {/* Tag Filter */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                !selectedTag
                  ? 'bg-primary text-white'
                  : 'bg-surface text-fg/70 hover:bg-surface/80 border border-primary/20'
              }`}
            >
              All Recipes
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  selectedTag === tag
                    ? 'bg-primary text-white'
                    : 'bg-surface text-fg/70 hover:bg-surface/80 border border-primary/20'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recipe Grid */}
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map(recipe => (
            <RecipeCard key={recipe.recipeId} recipe={recipe} />
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="text-center py-20">
            <Sparkles className="w-16 h-16 text-fg/20 mx-auto mb-4" />
            <p className="text-lg text-fg/60">No recipes found. Try a different search!</p>
          </div>
        )}
      </div>
    </div>
  );
}

function RecipeCard({ recipe }: { recipe: Recipe }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="group bg-surface rounded-lg overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-200 hover:shadow-lg">
      {/* Recipe Image Placeholder */}
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="w-12 h-12 text-primary/40" />
        </div>
        <div className="absolute top-3 right-3">
          <div className="px-3 py-1 bg-bg/80 backdrop-blur-sm rounded-full text-sm font-semibold text-primary">
            {recipe.healthScore}
          </div>
        </div>
      </div>

      {/* Recipe Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
          {recipe.title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {recipe.tags.slice(0, 3).map(tag => (
            <span
              key={tag}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-fg/60 mb-4">
          {recipe.prepTime && (
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{recipe.prepTime}</span>
            </div>
          )}
          {recipe.servings && (
            <div className="flex items-center gap-1">
              <UsersIcon className="w-4 h-4" />
              <span>{recipe.servings} servings</span>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-primary/10">
          <button
            onClick={() => setLiked(!liked)}
            className="flex items-center gap-2 text-sm hover:text-primary transition-colors duration-200"
          >
            <Heart className={`w-5 h-5 ${liked ? 'fill-primary text-primary' : ''}`} />
            <span>{recipe.likes + (liked ? 1 : 0)}</span>
          </button>
          <button className="flex items-center gap-2 text-sm hover:text-primary transition-colors duration-200">
            <Share2 className="w-5 h-5" />
            <span>{recipe.shares}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
