import { Timeline } from "../ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024 – Launch of BuyCex Infinity",
      content: (
        <div>
          <p className="mb-6 text-xs md:text-sm font-normal text-neutral-800 dark:text-neutral-200">
            We officially launched <strong>BuyCex Infinity</strong> — a next-generation crypto exchange platform designed for speed, security, and user empowerment. Our mission: make crypto trading accessible to everyone across the globe.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm text-neutral-700 dark:text-neutral-300">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              🌐 Global trading infrastructure deployed in 14+ regions
            </div>
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              🔒 Advanced 2FA and Anti-Phishing built-in
            </div>
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              ⚡ 1M+ TPS engine for near-instant order matching
            </div>
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              📱 Seamless mobile experience with real-time alerts
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023 – Core Development Phase",
      content: (
        <div>
          <p className="mb-6 text-xs md:text-sm font-normal text-neutral-800 dark:text-neutral-200">
            During early 2023, our engineering team focused on building the foundation of BuyCex Infinity from scratch. This included order book logic, liquidity aggregation, and modular KYC.
          </p>
          <p className="mb-6 text-xs md:text-sm font-normal text-neutral-800 dark:text-neutral-200">
            Our goal was to create a fast, resilient, and secure infrastructure that could scale globally. The backend systems were optimized for low latency performance, while the frontend was crafted for a frictionless user journey.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm text-neutral-700 dark:text-neutral-300">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              🛠️ Microservice-based architecture setup
            </div>
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              🧠 Implemented smart matching engine & real-time websockets
            </div>
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              💸 Fiat onramp testing and integration
            </div>
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              🤝 Partnership onboarding and liquidity planning
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Changelog – Recent Milestones",
      content: (
        <div>
          <p className="mb-4 text-xs md:text-sm font-normal text-neutral-800 dark:text-neutral-200">
            We've been rolling out major updates to make BuyCex Infinity faster, safer, and more rewarding for our users.
          </p>
          <div className="mb-8 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
            <div>✅ Listed 20+ new crypto assets including trending altcoins</div>
            <div>✅ Launched P2P trading with secure escrow mechanisms</div>
            <div>✅ Introduced multi-layer referral program</div>
            <div>✅ Deployed API for institutional traders</div>
            <div>✅ Upgraded dark mode and responsive dashboard UI</div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-neutral-700 dark:text-neutral-300">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              📢 New Launchpad integration for token sales
            </div>
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              💬 Live chat support & help center deployed
            </div>
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              🔄 Instant internal transfers with OTP & fund password
            </div>
            <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              🪙 USDT, BTC, ETH, BNB base markets now active
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
