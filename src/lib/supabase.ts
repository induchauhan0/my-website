import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Contact form submission function
export const submitContactForm = async (formData: {
  name: string;
  email: string;
  mobile: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}) => {
  try {
    const { data, error } = await supabase.functions.invoke('contact-form', {
      body: formData,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (error) {
      throw error;
    }

    return { data, error: null };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return { data: null, error };
  }
};

// Testimonial submission function
export const submitTestimonial = async (formData: FormData) => {
  try {
    const { data, error } = await supabase.functions.invoke('submit-testimonial', {
      body: formData
    });

    if (error) {
      throw error;
    }

    return { data, error: null };
  } catch (error) {
    console.error('Testimonial submission error:', error);
    return { data: null, error };
  }
};
