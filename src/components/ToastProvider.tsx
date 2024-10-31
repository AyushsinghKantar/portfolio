// ToastProvider.tsx

'use client';
import { createContext, useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Toast {
  id: number;
  message: string;
  duration?: number;
  style?: React.CSSProperties;
}

interface ToastContextType {
  success: (message: string, options?: { duration?: number; style?: React.CSSProperties }) => void;
  error: (message: string, options?: { duration?: number; style?: React.CSSProperties }) => void;
  info: (message: string, options?: { duration?: number; style?: React.CSSProperties }) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, options?: { duration?: number; style?: React.CSSProperties }) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, ...options }]);

    if (options?.duration) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
      }, options.duration);
    }
  };

  const success = (message: string, options?: { duration?: number; style?: React.CSSProperties }) => {
    addToast(message, {
      ...options,
      style: {
        background: '#10B981', // Green background for success
        color: '#fff',
        ...options?.style,
      },
    });
  };

  const error = (message: string, options?: { duration?: number; style?: React.CSSProperties }) => {
    addToast(message, {
      ...options,
      style: {
        background: '#EF4444', // Red background for error
        color: '#fff',
        ...options?.style,
      },
    });
  };

  const info = (message: string, options?: { duration?: number; style?: React.CSSProperties }) => {
    addToast(message, {
      ...options,
      style: {
        background: '#3B82F6', // Blue background for info
        color: '#fff',
        ...options?.style,
      },
    });
  };

  return (
    <ToastContext.Provider value={{ success, error, info }}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  );
};

const ToastContainer: React.FC<{ toasts: Toast[] }> = ({ toasts }) => {
  return (
    <div className="fixed top-0 right-0 p-4">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: -20 }}
            transition={{ duration: 0.3 }}
            style={{ ...toast.style }}
            className="toast"
          >
            {toast.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToastProvider;
