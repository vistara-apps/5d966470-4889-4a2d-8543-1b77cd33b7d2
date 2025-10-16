import { Recipe, Challenge, NFTBadge } from './types';

export const mockRecipes: Recipe[] = [
  {
    recipeId: '1',
    title: 'Quinoa Power Bowl',
    ingredients: ['quinoa', 'chickpeas', 'avocado', 'spinach', 'lemon', 'olive oil'],
    instructions: [
      'Cook quinoa according to package directions',
      'Roast chickpeas with olive oil and spices',
      'Massage spinach with lemon juice',
      'Combine all ingredients and top with sliced avocado'
    ],
    createdBy: 9152,
    healthScore: 95,
    tags: ['vegetarian', 'high-protein', 'gluten-free'],
    likes: 234,
    shares: 45,
    prepTime: '25 min',
    servings: 2,
    image: '/recipes/quinoa-bowl.jpg'
  },
  {
    recipeId: '2',
    title: 'Grilled Salmon with Asparagus',
    ingredients: ['salmon fillet', 'asparagus', 'garlic', 'lemon', 'olive oil', 'herbs'],
    instructions: [
      'Preheat grill to medium-high',
      'Season salmon with herbs and lemon',
      'Toss asparagus with olive oil and garlic',
      'Grill salmon 4-5 minutes per side',
      'Grill asparagus until tender'
    ],
    createdBy: 9152,
    healthScore: 92,
    tags: ['keto', 'high-protein', 'omega-3'],
    likes: 189,
    shares: 32,
    prepTime: '20 min',
    servings: 2,
    image: '/recipes/salmon.jpg'
  },
  {
    recipeId: '3',
    title: 'Berry Protein Smoothie',
    ingredients: ['mixed berries', 'protein powder', 'almond milk', 'banana', 'chia seeds'],
    instructions: [
      'Add all ingredients to blender',
      'Blend until smooth',
      'Pour into glass and enjoy'
    ],
    createdBy: 9152,
    healthScore: 88,
    tags: ['breakfast', 'high-protein', 'quick'],
    likes: 312,
    shares: 67,
    prepTime: '5 min',
    servings: 1,
    image: '/recipes/smoothie.jpg'
  }
];

export const mockChallenges: Challenge[] = [
  {
    challengeId: '1',
    name: '7-Day Veggie Boost',
    description: 'Eat at least 5 servings of vegetables daily for 7 days',
    startDate: '2024-01-15',
    endDate: '2024-01-22',
    reward: 'Veggie Virtuoso NFT Badge',
    status: 'active',
    requiredProofs: 7,
    participants: 234,
    image: '/challenges/veggie-boost.jpg'
  },
  {
    challengeId: '2',
    name: 'Protein Power Week',
    description: 'Hit your protein goals every day for a week',
    startDate: '2024-01-20',
    endDate: '2024-01-27',
    reward: 'Protein Pro NFT Badge',
    status: 'active',
    requiredProofs: 7,
    participants: 189,
    image: '/challenges/protein-week.jpg'
  },
  {
    challengeId: '3',
    name: 'Zero Waste Challenge',
    description: 'Use all ingredients in your pantry with zero food waste',
    startDate: '2024-01-25',
    endDate: '2024-02-01',
    reward: 'Eco Chef NFT Badge',
    status: 'upcoming',
    requiredProofs: 7,
    participants: 156,
    image: '/challenges/zero-waste.jpg'
  }
];

export const mockBadges: NFTBadge[] = [
  {
    badgeId: '1',
    ownerFid: 9152,
    type: 'Keto Master',
    achievementCriteria: 'Complete 30 days of keto meals',
    mintTimestamp: '2024-01-10T12:00:00Z',
    metadataURI: 'ipfs://...',
    image: '/badges/keto-master.png'
  },
  {
    badgeId: '2',
    ownerFid: 9152,
    type: 'Veggie Virtuoso',
    achievementCriteria: 'Complete 7-Day Veggie Boost Challenge',
    mintTimestamp: '2024-01-08T12:00:00Z',
    metadataURI: 'ipfs://...',
    image: '/badges/veggie-virtuoso.png'
  }
];
