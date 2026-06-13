export type ReportType = "lost" | "found";

export type ReportStatus =
  | "active"
  | "matched"
  | "claimed"
  | "resolved"
  | "expired";

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
};

export const mockReports: Report[] = [
  {
    id: "report-001",
    type: "lost",
    title: "Black iPhone 13 with blue case",
    category: "Phone",
    description:
      "Lost near Kabul University main gate. The phone has a blue silicone case and small scratch near the camera.",
    location: "Kabul University, Kabul",
    date: "2026-06-10",
    color: "Black",
    brand: "Apple",
    status: "active",
    matchScore: 92,
    isVerified: true,
    privateHint: "Wallpaper has a family photo.",
    createdAt: "2026-06-10T09:30:00.000Z",
  },
  {
    id: "report-002",
    type: "found",
    title: "Dark phone found near university road",
    category: "Phone",
    description:
      "A dark smartphone was found near University Road. The owner must verify details before contact is shared.",
    location: "University Road, Kabul",
    date: "2026-06-10",
    color: "Black",
    status: "active",
    matchScore: 88,
    isVerified: false,
    createdAt: "2026-06-10T11:10:00.000Z",
  },
  {
    id: "report-003",
    type: "lost",
    title: "Brown leather wallet",
    category: "Wallet",
    description:
      "Brown wallet lost around Karte 4. Contains bank cards and personal documents.",
    location: "Karte 4, Kabul",
    date: "2026-06-09",
    color: "Brown",
    status: "matched",
    matchScore: 84,
    isVerified: true,
    privateHint: "There is a small photo inside.",
    createdAt: "2026-06-09T15:40:00.000Z",
  },
  {
    id: "report-004",
    type: "found",
    title: "Set of keys with red tag",
    category: "Keys",
    description:
      "A key set with a red plastic tag was found near a grocery store.",
    location: "Shahr-e-Naw, Kabul",
    date: "2026-06-08",
    color: "Silver",
    status: "active",
    matchScore: 71,
    isVerified: false,
    createdAt: "2026-06-08T18:15:00.000Z",
  },
];

export const mockMatches = mockReports
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
