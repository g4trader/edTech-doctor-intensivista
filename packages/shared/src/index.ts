export type ContentFormat = "video" | "text" | "image";
export type ContentOrientation = "vertical" | "landscape" | "square";

export interface PlatformUser {
  id: string;
  name: string;
  email: string;
  role: "doctor" | "admin";
  hospital: string;
  specialty: string;
}

export interface UserStats {
  weeklyMinutes: number;
  completionRate: number;
  casesReviewed: number;
  rankingPercentile: number;
  lastAccess: string;
  subscriptionPlan: string;
}

export interface ContentAsset {
  id: string;
  title: string;
  format: ContentFormat;
  summary: string;
  coverTag: string;
  durationMinutes?: number;
  orientation?: ContentOrientation;
}

export interface PathologyContentCounts {
  videos: number;
  texts: number;
  images: number;
}

export interface PathologySummary {
  id: string;
  slug: string;
  name: string;
  clinicalFocus: string;
  frequencyRank: number;
  successRate: number;
  averageTimeToProtocolMinutes: number;
  diagnosisHighlights: string[];
  treatmentHighlights: string[];
  contentCounts: PathologyContentCounts;
}

export interface PathologyDetail extends PathologySummary {
  overview: string;
  diagnosticSteps: string[];
  treatmentProtocol: string[];
  monitoringChecklist: string[];
  curatorNote: string;
  contents: ContentAsset[];
}

export interface PlatformUsageStats {
  totalUsers: number;
  activeUsers30d: number;
  totalSessions30d: number;
  averageSessionMinutes: number;
  completionRate: number;
}

export interface TreatmentBenchmark {
  pathologySlug: string;
  pathologyName: string;
  treatmentName: string;
  successRate: number;
  supportingSignal: string;
}

export interface DashboardOverview {
  user: PlatformUser;
  userStats: UserStats;
  platformStats: PlatformUsageStats;
  mostFrequentPathologies: PathologySummary[];
  topTreatmentBenchmarks: TreatmentBenchmark[];
  featuredPathologies: PathologySummary[];
}
