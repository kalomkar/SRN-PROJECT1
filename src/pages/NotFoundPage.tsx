import React from 'react';
import { Link } from 'react-router-dom';
import { School, Home, ArrowLeft, GraduationCap } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
        <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center mx-auto border border-blue-100">
          <School className="w-8 h-8 text-blue-900" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-widest">
            Error 404
          </span>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The institutional resource, page, or document you are searching for does not exist or has been relocated.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/academics"
            className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Explore Academics</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
