import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Sparkles } from "lucide-react";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4">
      <div className="text-center space-y-6 max-w-md mx-auto">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-blue-50 text-blue-600 border border-blue-100 font-mono text-3xl font-black shadow-blue-sm">
          404
        </div>
        <h1 className="text-3xl font-black text-slate-900">Page Not Found</h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          The page or project you are looking for might have been updated or moved.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <Button href="/" variant="primary" size="md" icon="Home">
            Return to Homepage
          </Button>
          <Button href="/projects" variant="outline" size="md">
            View Active Projects
          </Button>
        </div>
      </div>
    </div>
  );
}
