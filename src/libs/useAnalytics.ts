// lib/useAnalytics.js
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID; // Replace with your Measurement ID

const useAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (typeof window.gtag === "function") {
      const url =
        pathname + (searchParams.toString() ? `?${searchParams}` : "");
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.gtag("config", GA_TRACKING_ID, { page_path: url });
    }
  }, [pathname, searchParams]);
};

export default useAnalytics;
