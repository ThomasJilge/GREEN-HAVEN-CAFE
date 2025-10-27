import { FaSpinner } from 'react-icons/fa';
import './loadingSpinner.css';

export default function LoadingSpinner() {
  return (
    <div className="spinnerOverlay">
      <FaSpinner className="spinnerIcon" />
    </div>
  );
}

