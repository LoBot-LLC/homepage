import type { Metadata } from "next";
import { PolicyContent } from "@/components/pages/PolicyContent";

export const metadata: Metadata = { title: "Company policy" };

export default function PolicyPage() {
  return <PolicyContent />;
}
