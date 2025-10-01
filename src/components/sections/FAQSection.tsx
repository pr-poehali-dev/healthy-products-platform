import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { RefObject, useState } from "react";

interface FAQSectionProps {
  faqRef: RefObject<HTMLElement>;
  isVisible: boolean;
}

export const FAQSection = ({ faqRef, isVisible }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Orders & Delivery",
      icon: "Package",
      questions: [
        {
          q: "What is your delivery area?",
          a: "We deliver to most major cities and surrounding areas. Enter your zip code at checkout to see if we deliver to your location. We're constantly expanding our delivery network!"
        },
        {
          q: "How long does delivery take?",
          a: "Standard delivery takes 2-3 business days. Express delivery is available in select areas for orders placed before 2 PM - you'll receive your items within 24 hours."
        },
        {
          q: "Is there a minimum order amount?",
          a: "Our minimum order is ₽500. Orders over ₽1000 qualify for free standard delivery. We want to make healthy eating accessible to everyone!"
        },
        {
          q: "Can I track my order?",
          a: "Yes! Once your order ships, you'll receive a tracking link via email and SMS. You can follow your delivery in real-time from our warehouse to your doorstep."
        }
      ]
    },
    {
      category: "Products",
      icon: "Leaf",
      questions: [
        {
          q: "Are all products organic?",
          a: "Yes, all our products are certified organic by recognized certification bodies. We work directly with organic farms that follow strict sustainable farming practices."
        },
        {
          q: "Where do you source your products?",
          a: "We partner with over 50 local and regional organic farms. We prioritize local sourcing to ensure freshness and support our community farmers."
        },
        {
          q: "Do you offer bulk purchasing?",
          a: "Absolutely! We offer bulk discounts on many items. Check individual product pages for bulk pricing, or contact our sales team for custom bulk orders."
        },
        {
          q: "How do you ensure product freshness?",
          a: "Our cold chain logistics maintain proper temperature throughout delivery. Products are harvested within 48 hours of delivery, ensuring maximum freshness and nutrition."
        }
      ]
    },
    {
      category: "Account & Payment",
      icon: "CreditCard",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards, debit cards, and digital wallets. All transactions are secured with 256-bit SSL encryption for your safety."
        },
        {
          q: "Can I save my favorite products?",
          a: "Yes! Create a free account to save favorite products, track orders, and set up recurring deliveries for items you order regularly."
        },
        {
          q: "Do you offer subscription services?",
          a: "We offer flexible subscription plans with 10-15% savings. Choose weekly, bi-weekly, or monthly delivery. Pause or cancel anytime - no commitment required."
        },
        {
          q: "Is there a loyalty program?",
          a: "Yes! Earn points with every purchase. Points can be redeemed for discounts, free products, and exclusive member benefits. Join for free today!"
        }
      ]
    },
    {
      category: "Returns & Support",
      icon: "HelpCircle",
      questions: [
        {
          q: "What is your return policy?",
          a: "We offer a 100% satisfaction guarantee. If you're not happy with any product, contact us within 7 days for a full refund or replacement - no questions asked."
        },
        {
          q: "How do I contact customer support?",
          a: "Our support team is available 24/7 via live chat, email, or phone. We typically respond to inquiries within 1 hour during business hours."
        },
        {
          q: "Do you offer nutritional consultations?",
          a: "Yes! All customers get free access to our certified nutritionists. Book a 15-minute consultation to discuss your dietary goals and get personalized recommendations."
        },
        {
          q: "Can I change my order after placing it?",
          a: "You can modify your order within 2 hours of placing it. Contact our support team immediately and we'll do our best to accommodate your changes."
        }
      ]
    }
  ];

  return (
    <section ref={faqRef} id="faq" className="py-20 px-4 bg-gradient-to-br from-white to-eco-cream/30">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
          <h3 className="text-4xl font-heading font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our products, delivery, and services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {faqs.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className={`border-0 bg-white rounded-3xl overflow-hidden transition-all duration-800 ${
                isVisible ? 'animate-scale-in opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <CardHeader className="bg-eco-cream/50">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                    <Icon name={category.icon} className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-heading">{category.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-3">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 10 + faqIndex;
                  const isOpen = openIndex === globalIndex;
                  
                  return (
                    <div
                      key={faqIndex}
                      className="border border-gray-200 rounded-2xl overflow-hidden hover:border-primary transition-colors"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full text-left p-4 flex items-start justify-between space-x-4 hover:bg-eco-cream/30 transition-colors"
                      >
                        <span className="font-heading font-semibold text-foreground pr-4">
                          {faq.q}
                        </span>
                        <Icon
                          name={isOpen ? "ChevronUp" : "ChevronDown"}
                          className={`h-5 w-5 text-primary flex-shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? 'max-h-96' : 'max-h-0'
                        }`}
                      >
                        <div className="p-4 pt-0 text-muted-foreground leading-relaxed">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`mt-12 text-center transition-all duration-800 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <Card className="border-0 bg-gradient-to-r from-primary to-eco-dark-green rounded-3xl p-8 text-white">
            <div className="max-w-2xl mx-auto">
              <Icon name="MessageCircle" className="h-12 w-12 mx-auto mb-4" />
              <h4 className="text-2xl font-heading font-bold mb-3">
                Still Have Questions?
              </h4>
              <p className="text-white/90 mb-6">
                Can't find the answer you're looking for? Our friendly support team is here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-eco-cream rounded-full">
                  <Icon name="Mail" className="mr-2 h-5 w-5" />
                  Email Support
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-full">
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  Call Us Now
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
