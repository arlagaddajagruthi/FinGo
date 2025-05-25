import {
    BarChart3,
    CreditCard,
    Globe,
    PieChart,
    Receipt,
    Zap,
} from "lucide-react";

/* ----------------------------- Stats Overview ----------------------------- */
export const statsData = [
  {
    value: "5K+",
    label: "Active Users",
  },
  {
    value: "$2M+",
    label: "Transactions Tracked",
  },
  {
    value: "99%",
    label: "Platform Uptime",
  },
  {
    value: "4.5/5",
    label: "Average User Rating",
  },
];

/* --------------------------- Key Features Section -------------------------- */
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-pink-500" />,
    title: "AI-Driven Analytics",
    description:
      "Visualize your spending habits with intelligent graphs and smart alerts tailored to your goals.",
  },
  {
    icon: <Receipt className="h-8 w-8 text-pink-500" />,
    title: "Auto Receipt Parser",
    description:
      "Scan and organize receipts instantly — no more manual entry or lost paperwork.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-pink-500" />,
    title: "Smart Budget Assistant",
    description:
      "Set goals and get budget tips that adjust automatically based on your activity.",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-pink-500" />,
    title: "Unified Account View",
    description:
      "Link all your bank accounts and cards to see a real-time overview of your finances.",
  },
  {
    icon: <Globe className="h-8 w-8 text-pink-500" />,
    title: "Live Currency Sync",
    description:
      "Track your global transactions with automatic currency conversion at market rates.",
  },
  {
    icon: <Zap className="h-8 w-8 text-pink-500" />,
    title: "Instant Insights",
    description:
      "Get actionable tips and trend reports powered by real-time machine learning.",
  },
];

/* -------------------------- How It Works Section -------------------------- */
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-pink-500" />,
    title: "Step 1: Sign Up Instantly",
    description:
      "Create a secure account in under a minute and start your financial journey.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-pink-500" />,
    title: "Step 2: Connect Your Accounts",
    description:
      "Sync your bank accounts and cards securely to track your transactions effortlessly.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-pink-500" />,
    title: "Step 3: Discover Smart Insights",
    description:
      "Let our AI suggest ways to save, invest, and grow your money — tailored just for you.",
  },
];

/* ---------------------------- Testimonials Section ---------------------------- */
export const testimonialsData = [
  {
    name: "Aisha Patel",
    role: "Startup Founder",
    image: "https://randomuser.me/api/portraits/women/81.jpg",
    quote:
      "FinGo gives me a real-time snapshot of my spending. It’s like having a CFO in my pocket!",
  },
  {
    name: "David Kim",
    role: "Remote Developer",
    image: "https://randomuser.me/api/portraits/men/63.jpg",
    quote:
      "The multi-currency support is a game changer for freelancers working with global clients.",
  },
  {
    name: "Lena Rivera",
    role: "Marketing Consultant",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "Automated budgeting tips helped me cut expenses by 25% within just two months.",
  },
  {
    name: "Ethan Brooks",
    role: "College Student",
    image: "https://randomuser.me/api/portraits/men/82.jpg",
    quote:
      "I’ve never felt more in control of my finances. FinGo makes adulting easier.",
  },
  {
    name: "Sofia Nguyen",
    role: "Digital Nomad",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
    quote:
      "I travel full-time — and FinGo helps me manage all my global expenses in one dashboard.",
  },
  {
    name: "Marcus Allen",
    role: "Senior Engineer",
    image: "https://randomuser.me/api/portraits/men/70.jpg",
    quote:
      "I used to dread tracking my spending. Now, it’s automatic — and even enjoyable!",
  },
];
