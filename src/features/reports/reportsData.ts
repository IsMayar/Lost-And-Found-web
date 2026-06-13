export type ReportType = "lost" | "found";

export type ReportStatus =
  | "active"
  | "matched"
  | "claimed"
  | "resolved"
  | "expired"
  | "pending_review";

export type ClaimStatus = "pending" | "approved" | "rejected" | "needs_more_info" | "resolved";

export type ReportCategory =
  | "Phone"
  | "Wallet"
  | "Bag"
  | "Keys"
  | "Document"
  | "Laptop"
  | "Pet"
  | "Other";

export type Report = {
  id: string;
  type: ReportType;
  title: string;
  category: ReportCategory;
  description: string;
  location: string;
  date: string;
  color?: string;
  brand?: string;
  imageUrl?: string;
  status: ReportStatus;
  matchScore?: number;
  isVerified?: boolean;
  privateHint?: string;
  createdAt: string;
  reporterName?: string;
  contactPreference?: "platform" | "phone-after-approval" | "email-after-approval";
  visibility?: "public" | "private";
  evidence?: string[];
};

export type ClaimRequest = {
  id: string;
  reportId: string;
  claimantName: string;
  status: ClaimStatus;
  submittedAt: string;
  confidence: number;
  summary: string;
};

export type NotificationItem = {
  id: string;
  title: string;
  message: string;
  type: "match" | "claim" | "system" | "safety";
  isRead: boolean;
  createdAt: string;
};

export type ActivityItem = {
  id: string;
  title: string;
  description: string;
  time: string;
  tone: "blue" | "green" | "amber" | "rose" | "slate";
};

export const mockReports: Report[] = [
  {
    id: "report-001",
    type: "lost",
    title: "Black iPhone 13 with blue case",
    category: "Phone",
    description:
      "Lost near Kabul University main gate. The phone has a blue silicone case and a small scratch near the camera. Contact details should only be shared after verification.",
    location: "Kabul University, Kabul",
    date: "2026-06-10",
    color: "Black",
    brand: "Apple",
    status: "matched",
    matchScore: 92,
    isVerified: true,
    privateHint: "Wallpaper has a family photo.",
    createdAt: "2026-06-10T09:30:00.000Z",
    reporterName: "Ismael M.",
    contactPreference: "platform",
    visibility: "public",
    evidence: ["Blue silicone case", "Scratch near camera", "Lost around main gate"],
  },
  {
    id: "report-002",
    type: "found",
    title: "Dark phone found near university road",
    category: "Phone",
    description:
      "A dark smartphone was found near University Road. The owner must verify model, case color, and exact location before contact is shared.",
    location: "University Road, Kabul",
    date: "2026-06-10",
    color: "Black",
    brand: "Unknown",
    status: "active",
    matchScore: 88,
    isVerified: false,
    createdAt: "2026-06-10T11:10:00.000Z",
    reporterName: "Community member",
    contactPreference: "platform",
    visibility: "public",
    evidence: ["Dark phone", "Found near university road", "Owner must verify details"],
  },
  {
    id: "report-003",
    type: "lost",
    title: "Brown leather wallet",
    category: "Wallet",
    description:
      "Brown leather wallet lost around Karte 4. It contains bank cards and personal documents. Public details are limited for safety.",
    location: "Karte 4, Kabul",
    date: "2026-06-09",
    color: "Brown",
    brand: "Unknown",
    status: "matched",
    matchScore: 84,
    isVerified: true,
    privateHint: "There is a small photo inside.",
    createdAt: "2026-06-09T15:40:00.000Z",
    reporterName: "Verified user",
    contactPreference: "platform",
    visibility: "public",
    evidence: ["Brown leather", "Personal documents", "Lost near Karte 4"],
  },
  {
    id: "report-004",
    type: "found",
    title: "Set of keys with red tag",
    category: "Keys",
    description:
      "A key set with a red plastic tag was found near a grocery store. Owner should describe the number of keys and keychain details.",
    location: "Shahr-e-Naw, Kabul",
    date: "2026-06-08",
    color: "Silver",
    brand: "Unknown",
    status: "active",
    matchScore: 71,
    isVerified: false,
    createdAt: "2026-06-08T18:15:00.000Z",
    reporterName: "Finder",
    contactPreference: "platform",
    visibility: "public",
    evidence: ["Red plastic tag", "Found near grocery store", "Several keys"],
  },
  {
    id: "report-005",
    type: "found",
    title: "Student ID card found in library",
    category: "Document",
    description:
      "A student ID card was found inside the central library reading area. Sensitive ID details are hidden until verified by staff.",
    location: "Central Library, Kabul",
    date: "2026-06-07",
    color: "Blue",
    brand: "University ID",
    status: "pending_review",
    matchScore: 79,
    isVerified: true,
    createdAt: "2026-06-07T13:05:00.000Z",
    reporterName: "Library desk",
    contactPreference: "platform",
    visibility: "public",
    evidence: ["Student ID", "Found in reading area", "Admin review required"],
  },
  {
    id: "report-006",
    type: "lost",
    title: "Grey laptop bag with charger",
    category: "Bag",
    description:
      "Grey laptop bag lost in a taxi near Deh Afghanan. It contains a charger and notebook. Claimant should describe the notebook cover.",
    location: "Deh Afghanan, Kabul",
    date: "2026-06-06",
    color: "Grey",
    brand: "Lenovo",
    status: "active",
    matchScore: 76,
    isVerified: false,
    privateHint: "Notebook has a black cover.",
    createdAt: "2026-06-06T19:20:00.000Z",
    reporterName: "Ahmad R.",
    contactPreference: "platform",
    visibility: "public",
    evidence: ["Grey bag", "Laptop charger", "Lost in taxi"],
  },
];

export const mockClaims: ClaimRequest[] = [
  {
    id: "claim-001",
    reportId: "report-002",
    claimantName: "Ismael M.",
    status: "pending",
    submittedAt: "2026-06-10T12:00:00.000Z",
    confidence: 86,
    summary: "Claimant described a blue case and exact lost location near the university gate.",
  },
  {
    id: "claim-002",
    reportId: "report-004",
    claimantName: "Sahar A.",
    status: "needs_more_info",
    submittedAt: "2026-06-09T09:45:00.000Z",
    confidence: 64,
    summary: "Claimant identified the red tag but still needs to describe the number of keys.",
  },
  {
    id: "claim-003",
    reportId: "report-003",
    claimantName: "Verified wallet owner",
    status: "approved",
    submittedAt: "2026-06-09T17:30:00.000Z",
    confidence: 91,
    summary: "Claim answers matched private wallet hints and location history.",
  },
];

export const mockNotifications: NotificationItem[] = [
  {
    id: "notification-001",
    title: "High confidence phone match",
    message: "A found phone near University Road may match your lost iPhone report.",
    type: "match",
    isRead: false,
    createdAt: "10 minutes ago",
  },
  {
    id: "notification-002",
    title: "Claim needs review",
    message: "A user submitted ownership answers for the keys you reported.",
    type: "claim",
    isRead: false,
    createdAt: "1 hour ago",
  },
  {
    id: "notification-003",
    title: "Safety reminder",
    message: "Never reveal phone numbers or document IDs before verification is approved.",
    type: "safety",
    isRead: true,
    createdAt: "Yesterday",
  },
  {
    id: "notification-004",
    title: "Report review completed",
    message: "Your student ID report was reviewed and is now visible in search.",
    type: "system",
    isRead: true,
    createdAt: "2 days ago",
  },
];

export const mockActivity: ActivityItem[] = [
  {
    id: "activity-001",
    title: "AI match generated",
    description: "Black iPhone 13 matched with a found dark phone near University Road.",
    time: "10 min ago",
    tone: "blue",
  },
  {
    id: "activity-002",
    title: "Claim request submitted",
    description: "A claimant answered verification questions for the red-tag keys.",
    time: "1 hour ago",
    tone: "amber",
  },
  {
    id: "activity-003",
    title: "Wallet claim approved",
    description: "Private hints matched and the owner was approved for safe contact.",
    time: "Yesterday",
    tone: "green",
  },
  {
    id: "activity-004",
    title: "Report pending review",
    description: "A document report is waiting for admin moderation before public listing.",
    time: "2 days ago",
    tone: "slate",
  },
];

export const mockSavedSearches = [
  {
    id: "saved-001",
    query: "black phone near university",
    filters: "Phone · Kabul University · last 7 days",
    alerts: true,
  },
  {
    id: "saved-002",
    query: "brown wallet Karte 4",
    filters: "Wallet · Karte 4 · matched only",
    alerts: true,
  },
];

export const mockMatches = [...mockReports]
  .filter((report) => typeof report.matchScore === "number")
  .sort((a, b) => (b.matchScore ?? 0) - (a.matchScore ?? 0));

export const getReportById = (id: string) => {
  return mockReports.find((report) => report.id === id) ?? null;
};

export const getReportsByType = (type: ReportType) => {
  return mockReports.filter((report) => report.type === type);
};

export const getActiveReports = () => {
  return mockReports.filter((report) => report.status === "active");
};

export const getClaimByReportId = (reportId: string) => {
  return mockClaims.find((claim) => claim.reportId === reportId) ?? null;
};

export const getDashboardStats = () => {
  const active = mockReports.filter((report) => report.status === "active").length;
  const matched = mockReports.filter((report) => report.status === "matched").length;
  const pendingClaims = mockClaims.filter((claim) => claim.status === "pending" || claim.status === "needs_more_info").length;
  const resolved = mockReports.filter((report) => report.status === "resolved" || report.status === "claimed").length;

  return { active, matched, pendingClaims, resolved };
};
