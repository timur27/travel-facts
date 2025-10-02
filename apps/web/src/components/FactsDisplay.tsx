import { motion } from 'framer-motion';
import type { Fact } from '@travel-facts/shared';

interface FactsDisplayProps {
  cityName: string;
  facts: Fact[];
  loading: boolean;
  onBack: () => void;
}

export function FactsDisplay({ cityName, facts, loading, onBack }: FactsDisplayProps) {
  return (
    <motion.div
      key="facts"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-4 py-16"
    >
      <div className="max-w-4xl mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -4 }}
          onClick={onBack}
          className="flex items-center text-slate-400 hover:text-white mb-8 transition-colors group"
        >
          <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to cities
        </motion.button>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl font-bold text-white mb-4"
        >
          {cityName}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 mb-12 text-lg"
        >
          {facts.length} fascinating historical facts
        </motion.p>

        {loading ? (
          <div className="flex justify-center py-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white text-xl"
            >
              Loading facts...
            </motion.div>
          </div>
        ) : (
          <div className="space-y-6">
            {facts.map((fact, index) => (
              <motion.div
                key={fact.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 * index, duration: 0.5 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="absolute top-6 right-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    {fact.category}
                  </span>
                </div>

                <div className="pr-32">
                  <div className="text-4xl font-bold text-white/10 mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <p className="text-slate-200 text-lg leading-relaxed">
                    {fact.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
