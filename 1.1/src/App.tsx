import { PricingCard } from './PricingCard';

// Data for the pricing plans
const pricingData = [
  {
    plan: 'Standard',
    price: '$100',
    features: ['50,000 Requests', '4 contributors', 'Up to 3 GB storage space'],
    isFeatured: false,
  },
  {
    plan: 'Pro',
    price: '$200',
    features: ['100,000 Requests', '7 contributors', 'Up to 6 GB storage space'],
    isFeatured: true,
  },
  {
    plan: 'Expert',
    price: '$500',
    features: ['200,000 Requests', '11 contributors', 'Up to 10 GB storage space'],
    isFeatured: false,
  },
];

function App() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-zinc-900 p-4 sm:p-6 lg:p-8">
      <div>
        <h1 className="text-center text-4xl font-bold text-white sm:text-5xl mb-10">
          Pricing
        </h1>
        {/* This container controls the layout.
          - flex-col: Stacks cards vertically on small screens (< 640px).
          - sm:flex-row: Arranges cards horizontally on screens >= 640px.
        */}
        <div className="flex w-full max-w-6xl flex-col sm:flex-row">
          {pricingData.map((data) => (
            // The parent controls the width of its children for proper layout.
            <div key={data.plan} className="w-full sm:w-1/3">
              <PricingCard {...data} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;