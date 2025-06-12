import React from 'react';

// Props interface aligning with your requirements
interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured = false,
}) => {
  // Base classes including smooth transitions for all properties (scale, shadow)
  const cardBaseClasses = 'relative flex h-full flex-col text-center transition-all duration-300 ease-in-out shadow-md focus-within:z-20 focus-within:ring-4 focus-within:ring-blue-500/70 focus-within:ring-offset-2 focus-within:ring-offset-zinc-900';
  
  // Hover classes now include the scale effect
  const cardHoverClasses = 'hover:z-20 hover:shadow-2xl hover:scale-105';

  const cardStyleClasses = isFeatured
    ? 'bg-slate-700 text-white z-10'
    : 'bg-white text-slate-800';

  const featureBorderClass = isFeatured ? 'border-slate-600' : 'border-slate-200';

  return (
    <div
      className={`${cardBaseClasses} ${cardStyleClasses} ${cardHoverClasses}`}
    >
      {/* Top Section: Plan & Price */}
      <div className="p-8">
        <h3 className="text-xl font-semibold uppercase tracking-widest">{plan}</h3>
        <p className="my-6">
          <span className="text-6xl font-bold">{price}</span>
        </p>
      </div>

      {/* Middle Section: Features List */}
      <ul className="flex-grow">
        {features.map((feature, index) => (
          <li key={index} className={`border-t ${featureBorderClass} px-6 py-4 text-sm`}>
            {feature}
          </li>
        ))}
      </ul>

      {/* Bottom Section: Subscribe Button */}
      <div className="p-8">
        <button className="w-full uppercase tracking-wider py-3 font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Subscribe
        </button>
      </div>
    </div>
  );
};