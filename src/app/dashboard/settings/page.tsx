"use client";

import React from "react";
import { useRouter } from "next/navigation";

function Setting() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleBlog = () => {
    const number = Math.random();
    if (number < 0.5) {
      router.push("/blog");
    } else {
      alert(number);
    }
  };

  return (
    <div>
      <div className="py-3">
        <button className="text-orange-600 bg-blue-300 rounded-sm p-5" onClick={handleBack}>
          Back
        </button>
      </div>
      <div className="py-3">
        <button className="text-green-800 bg-yellow-300 rounded-sm p-5" onClick={handleBlog}>
          Go to Blog Page
        </button>
      </div>
      Setting
    </div>
  );
}

export default Setting;