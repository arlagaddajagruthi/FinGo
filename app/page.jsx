import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/mainPage";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-24">
      <HeroSection />

      {/* --------------------- Stats Section --------------------- */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-pink-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------- Features Section --------------------- */}
      <section className="py-16 bg-white border-t border-pink-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-pink-500">
            Manage Your Finances in One Go
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card
                key={index}
                className="p-5 shadow-md border border-pink-100 hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-start gap-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-blue-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------- How It Works Section --------------------- */}
      <section className="py-20 bg-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-pink-500">
            HOW IT WORKS?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-300 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------- Testimonials Section --------------------- */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-pink-500">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card
                key={index}
                className="p-5 shadow-md border border-pink-100 hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-start gap-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold text-pink-500">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------- CTA Section --------------------- */}
      <section className="py-20 bg-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-pink-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finances
            smarter with FinGo.
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-pink-600 hover:bg-pink-100 transition-colors duration-300 ease-in-out animate-bounce"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
