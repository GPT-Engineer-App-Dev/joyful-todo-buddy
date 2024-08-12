import { useState, useCallback } from 'react';
import ReactConfetti from 'react-confetti';
import { Button } from "@/components/ui/button";

const Confetti = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const handleConfetti = useCallback(() => {
    setIsConfettiActive(true);
    setTimeout(() => setIsConfettiActive(false), 5000); // Stop after 5 seconds
  }, []);

  return (
    <div className="flex-grow flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Confetti Celebration!</h1>
      <Button onClick={handleConfetti} className="text-lg">
        Celebrate!
      </Button>
      {isConfettiActive && <ReactConfetti />}
    </div>
  );
};

export default Confetti;
