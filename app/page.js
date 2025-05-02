"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
      // Redirect to dashboard if logged in
      router.push("/dashboard");
    } else {
      // Redirect to login page if not logged in
      router.push("/login");
    }
  }, [router]);

  return null; // No UI needed as we're redirecting
}
