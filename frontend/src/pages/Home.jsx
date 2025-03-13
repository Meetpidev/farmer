import { Link } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const features = [
  {
    title: 'AI-Verified Certification',
    description: 'Simple one-click photo system for natural farming verification',
  },
  {
    title: 'Blockchain Transparency',
    description: 'Tamper-proof farming records with QR code tracking',
  },
  {
    title: 'Voice & Language Support',
    description: 'Easy navigation in multiple local languages',
  },
  {
    title: 'Real-Time Updates',
    description: 'Direct updates on crop growth and availability',
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Connecting Natural Farmers with Conscious Consumers
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Empowering farmers with technology while ensuring transparency and fair pricing for consumers.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/marketplace" className="btn-primary">
                Explore Marketplace
              </Link>
              <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">
              Better Farming Future
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to grow sustainably
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <CheckCircleIcon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                    {feature.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}