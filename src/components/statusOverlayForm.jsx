import { useEffect } from 'react';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import './statusOverlayForm.css';

export default function StatusOverlay({ type, message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="statusOverlay">
      <div className="statusContent">
        {type === 'success' && (
          <FaCheckCircle size={140} color="#4CAF50" />
        )}
        {type === 'error' && (
          <FaExclamationCircle size={140} color="#D32F2F" />
        )}
        <p className="statusMessage">{message}</p>
      </div>
    </div>
  );
}

