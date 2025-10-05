import { useEffect, useState } from 'react';
import coffeeCup from '../assets/coffeeCup.png';
import moonIcon from '../assets/moon.png';


export default function OpenStatus() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const bangkokTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Bangkok",
      hour: "numeric",
      hour12: false
    });

    const hour = parseInt(bangkokTime);
    const openHour = 7;
    const closeHour = 18;

    setIsOpen(hour >= openHour && hour < closeHour);
  }, []);

  return (
    <div className={`openStatus ${isOpen ? 'open' : 'closed'}`}>
      <img
        src={isOpen ? coffeeCup : moonIcon}
        alt={isOpen ? 'Coffee cup' : 'Moon'}
        className="statusIcon"
      />
      {isOpen
        ? 'open today: 7 a.m. - 6 p.m.'
        : 'closed: open tomorrow from 7 a.m.'}
    </div>
  );
}
