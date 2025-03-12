import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface AIAvatarProps {
  isOverworked: boolean;
  onReschedule: () => void;
}

const AIAvatar: React.FC<AIAvatarProps> = ({ isOverworked, onReschedule }) => {
  const [isVisible, setIsVisible] = useState(true);

  const jerryImages = {
     sad: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWMomTdz6E8MB0MHtziV-mN0j2udBYJw5BCQ&s",
    happy: "https://i.pinimg.com/736x/84/b3/bd/84b3bdee2b4bc649505bcf1224c6328e.jpg"
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed bottom-4 right-4 max-w-sm bg-white rounded-lg shadow-xl p-6 border border-yellow-200"
      >
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <motion.div
              animate={isOverworked ? {
                rotate: [-5, 5, -5],
                y: [0, -5, 0]
              } : {
                rotate: [0, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="relative w-24 h-24"
            >
              <img
                src={isOverworked ? jerryImages.sad : jerryImages.happy}
                alt={isOverworked ? "Sad Jerry" : "Happy Jerry"}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
          
          <div className="flex-1">
            <div className={`${isOverworked ? 'bg-yellow-50' : 'bg-green-50'} rounded-tl-xl rounded-tr-xl rounded-br-xl p-4 mb-4`}>
              {isOverworked ? (
                <>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Oh cheese! You're working too hard! 🧀
                  </h3>
                  <p className="text-gray-600">
                    Want me to help you create a more balanced schedule? I promise it'll be better than running from Tom all day!
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Hooray! Perfect balance! 🎉
                  </h3>
                  <p className="text-gray-600">
                    You're doing great! Your schedule is as balanced as my favorite cheese wheel!
                  </p>
                </>
              )}
            </div>
            
            {isOverworked && (
              <div className="flex space-x-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onReschedule}
                  className="flex-1 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                >
                  Yes, help me Jerry!
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsVisible(false)}
                  className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Maybe later
                </motion.button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AIAvatar;