// import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
// import './statusOverlayForm.css';

// export default function StatusOverlay({ type }) {
//   return (
//     <div className="statusOverlay">
//       {type === 'success' && <FaCheckCircle className="statusIcon success" />}
//       {type === 'error' && <FaExclamationCircle className="statusIcon error" />}
//     </div>
//   );
// }

import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import './statusOverlayForm.css';

export default function StatusOverlay({ type }) {
  return (
    <div className="statusOverlay">
      {type === 'success' && (
        <FaCheckCircle style={{ fontSize: '140px', color: '#4CAF50' }} />
      )}
      {type === 'error' && (
        <FaExclamationCircle style={{ fontSize: '140px', color: '#D32F2F' }} />
      )}
    </div>
  );
}
