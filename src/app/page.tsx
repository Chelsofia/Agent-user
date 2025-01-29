"use client"; 

import { useEffect } from "react";
import { useRouter } from "next/navigation"; 

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    
    setTimeout(() => {
      router.push("/agent/dashboard");
    }, 2000); 
  }, [router]);

  return (
    <main className="h-screen w-full flex items-center justify-center bg-gray-100">
      {/* Loading Screen */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-t-orange-500 rounded-full animate-spin"></div>
        <p className="text-lg font-semibold text-gray-700">
          Redirecting to Dashboard...
        </p>
      </div>
    </main>
  );
}
