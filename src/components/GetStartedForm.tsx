import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { X, Mail, Globe, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  emailConsent: z.boolean().refine(val => val === true, "You must agree to receive emails"),
  websiteUrl: z.string().url("Please enter a valid website URL").optional().or(z.literal("")),
  websiteType: z.enum(['cms', 'proprietary'], {
    required_error: "Please select your website type",
  }),
});

type FormData = z.infer<typeof formSchema>;

interface GetStartedFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GetStartedForm({ isOpen, onClose }: GetStartedFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      emailConsent: false,
      websiteUrl: '',
      websiteType: undefined,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('leads')
        .insert({
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          email_consent: data.emailConsent,
          website_url: data.websiteUrl || null,
          website_type: data.websiteType,
        });

      if (error) throw error;

      toast({
        title: "Thank you for your interest!",
        description: "We'll be in touch soon with your demo access.",
      });

      form.reset();
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-card border border-border rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className="relative p-6 border-b border-border">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-card-foreground mb-2">Get Started</h2>
            <p className="text-muted-foreground text-sm">
              Join the future of AI-powered furniture assistance
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 h-8 w-8 text-muted-foreground hover:text-card-foreground"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Form */}
        <div className="p-6">
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Tell us about your business</h3>
              <p className="text-muted-foreground text-sm">
                We'll customize your AI assistant to perfectly match your needs
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <User className="h-5 w-5 text-primary" />
                    <h4 className="text-base font-medium text-card-foreground">Personal Information</h4>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-card-foreground">First Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John" 
                              {...field}
                              className="h-12 bg-input border-border text-card-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-card-foreground">Last Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Doe" 
                              {...field}
                              className="h-12 bg-input border-border text-card-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Contact Information Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Mail className="h-5 w-5 text-primary" />
                    <h4 className="text-base font-medium text-card-foreground">Contact Information</h4>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-card-foreground">Contact Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="john@example.com" 
                            {...field}
                            className="h-12 bg-input border-border text-card-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="emailConsent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-border p-4 bg-muted/30">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="border-border data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm text-card-foreground font-medium">
                            I agree to receive emails regarding the project
                          </FormLabel>
                          <p className="text-xs text-muted-foreground">
                            Stay updated on your demo access and project updates
                          </p>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Website Information Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Globe className="h-5 w-5 text-primary" />
                    <h4 className="text-base font-medium text-card-foreground">Website Information</h4>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="websiteUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-card-foreground">Website Address <span className="text-muted-foreground text-sm">(Optional)</span></FormLabel>
                        <FormControl>
                          <Input 
                            type="url"
                            placeholder="https://yourstore.com" 
                            {...field}
                            className="h-12 bg-input border-border text-card-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="websiteType"
                    render={({ field }) => (
                      <FormItem className="space-y-4">
                        <FormLabel className="text-card-foreground font-medium">What type of website platform do you use?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="grid grid-cols-1 gap-3"
                          >
                            <div className="flex items-center space-x-3 rounded-lg border border-border p-4 hover:bg-muted/50 transition-colors">
                              <RadioGroupItem value="cms" id="cms" className="border-border text-primary" />
                              <div className="flex-1">
                                <Label htmlFor="cms" className="text-card-foreground font-medium cursor-pointer">
                                  CMS Platform
                                </Label>
                                <p className="text-xs text-muted-foreground mt-1">
                                  WordPress, Shopify, Wix, Squarespace, etc.
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3 rounded-lg border border-border p-4 hover:bg-muted/50 transition-colors">
                              <RadioGroupItem value="proprietary" id="proprietary" className="border-border text-primary" />
                              <div className="flex-1">
                                <Label htmlFor="proprietary" className="text-card-foreground font-medium cursor-pointer">
                                  Custom/Proprietary
                                </Label>
                                <p className="text-xs text-muted-foreground mt-1">
                                  Custom-built website or proprietary platform
                                </p>
                              </div>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t border-border">
                  <Button
                    type="submit"
                    className="w-full h-14 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground"></div>
                        <span>Setting up your demo...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <span>Sign up for demo</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    )}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground mt-4">
                    We'll contact you within 24 hours to schedule your personalized demo
                  </p>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}