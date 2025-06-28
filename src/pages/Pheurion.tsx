import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Crown, Star, Zap, CheckCircle } from 'lucide-react';

const Pheurion: React.FC = () => {
  const plans = [
    {
      name: 'Basic',
      icon: Star,
      price: 'Free',
      features: ['Limited Features', 'Basic Support', 'Standard Access'],
      current: false,
      available: false,
    },
    {
      name: 'Select',
      icon: Crown,
      price: '$29/month',
      features: ['Enhanced Features', 'Priority Support', 'Advanced Access', 'Real-time Monitoring'],
      current: true,
      available: true,
    },
    {
      name: 'Pheurion',
      icon: Zap,
      price: '$79/month',
      features: ['Premium Features', 'VIP Support', 'Full Access', 'Advanced Analytics', 'Custom Integration'],
      current: false,
      available: false,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <p className="text-gray-600 mb-4">Current Plan: Select</p>
        <Button 
          className="bg-[#8c52ff] hover:bg-[#7a45e6] text-white mb-6"
          size="lg"
        >
          See COV Plans
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <Card 
            key={index} 
            className={`border-2 ${
              plan.current 
                ? 'border-[#8c52ff] bg-[#8c52ff]/5' 
                : 'border-[#8c52ff]/20 hover:border-[#8c52ff]/40'
            } transition-all duration-300`}
          >
            <CardHeader className="text-center">
              <div className="flex justify-center mb-2">
                <plan.icon className={`w-8 h-8 ${plan.current ? 'text-[#8c52ff]' : 'text-gray-400'}`} />
              </div>
              <CardTitle className={`text-xl ${plan.current ? 'text-[#8c52ff]' : 'text-gray-700'}`}>
                {plan.name}
              </CardTitle>
              <CardDescription className="text-2xl font-bold text-[#8c52ff]">
                {plan.price}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Button 
                className={`w-full ${
                  plan.current 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : !plan.available
                      ? 'bg-red-400 cursor-not-allowed'
                      : 'bg-[#8c52ff] hover:bg-[#7a45e6]'
                } text-white`}
                disabled={plan.current || !plan.available}
              >
                {plan.current 
                  ? 'Current Plan' 
                  : !plan.available 
                    ? 'Out of Stock' 
                    : 'Upgrade Now'
                }
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-2 border-[#8c52ff]/20">
        <CardHeader>
          <CardTitle className="text-[#8c52ff]">Why Upgrade?</CardTitle>
          <CardDescription>Benefits of the premium plan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#8c52ff]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-[#8c52ff]" />
              </div>
              <h3 className="font-semibold text-[#8c52ff] mb-2">Enhanced Performance</h3>
              <p className="text-sm text-gray-600">Faster processing and better optimization</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#8c52ff]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Crown className="w-6 h-6 text-[#8c52ff]" />
              </div>
              <h3 className="font-semibold text-[#8c52ff] mb-2">Premium Support</h3>
              <p className="text-sm text-gray-600">24/7 priority customer support</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#8c52ff]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-[#8c52ff]" />
              </div>
              <h3 className="font-semibant text-[#8c52ff] mb-2">Exclusive Features</h3>
              <p className="text-sm text-gray-600">Access to advanced tools and features</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Pheurion;
