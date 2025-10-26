import { FaCheck, FaTimes } from 'react-icons/fa';

export default function ValidationIcon({ isValid, size = 15 }) {
  if (isValid === null) return null;

  const Icon = isValid ? FaCheck : FaTimes;
  const color = isValid ? '#4CAF50' : '#E53935';

  return <Icon className="validationIcon" color={color} size={size} title={isValid ? 'Valid' : 'Invalid'} />;
}
