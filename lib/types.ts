export interface User {
  fid: number;
  username: string;
  walletAddress?: string;
  dietaryPreferences: string[];
  fitnessGoals: string[];
  pantryInventory: string[];
  recipesSaved: string[];
  recipesCreated: string[];
  reputationScore: number;
  nftBadges: string[];
}

export interface Recipe {
  recipeId: string;
  title: string;
  ingredients: string[];
  instructions: string[];
  createdBy: number;
  healthScore: number;
  tags: string[];
  likes: number;
  shares: number;
  image?: string;
  prepTime?: string;
  servings?: number;
}

export interface Challenge {
  challengeId: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  reward: string;
  status: 'active' | 'upcoming' | 'completed';
  requiredProofs: number;
  participants: number;
  image?: string;
}

export interface ProofOfPlate {
  proofId: string;
  challengerFid: number;
  challengeId: string;
  mealImage: string;
  timestamp: string;
  verifications: number;
  verified: boolean;
}

export interface NFTBadge {
  badgeId: string;
  ownerFid: number;
  type: string;
  achievementCriteria: string;
  mintTimestamp: string;
  metadataURI: string;
  image?: string;
}
