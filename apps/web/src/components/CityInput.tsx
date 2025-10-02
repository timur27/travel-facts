import { motion, AnimatePresence } from 'framer-motion';

interface CityInputProps {
  cityInput: string;
  onCityInputChange: (value: string) => void;
  onSubmit: () => void;
  error: string;
}

export function CityInput({ cityInput, onCityInputChange, onSubmit, error }: CityInputProps) {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <motion.div
      key="input"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-8"
        >
          <p className="text-slate-400 text-xl">
            Discover fascinating historical stories
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <input
            type="text"
            value={cityInput}
            onChange={(e) => onCityInputChange(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a city..."
            className="w-full px-8 py-6 text-2xl text-white placeholder-slate-500 bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl focus:outline-none focus:border-blue-500/50 transition-all duration-300"
            autoFocus
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-center text-slate-500 text-sm"
          >
            Press Enter to explore
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-6 text-center text-red-400 text-sm"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
