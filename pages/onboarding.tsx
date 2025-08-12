import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  price: number;
  salesman: string;
}

export default function OnboardingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [showAdvancedFields, setShowAdvancedFields] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://n8n.automatedsolarbiz.com/webhook/69d2595d-5eb0-4fe5-9bbe-2db883ec58df', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 py-8">
        <div className="glow-card p-6 sm:p-8 max-w-md w-full text-center">
          <div className="success-animation">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 success-checkmark">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Details Submitted</h2>
            <p className="text-gray-300 mb-6">Expect your contract shortly.</p>
            <button
              onClick={() => setIsSuccess(false)}
              className="btn-primary w-full"
            >
              Submit Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen py-8 sm:py-12 px-4 relative"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dmbzcxhjn/image/upload/v1755000756/a-photograph-of-a-young-woman-lounging-o_iluGMZkITg-URraBVffTdg_Y-stmTsISd21dscsQB3LjA_1_k5fium.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-2xl mx-auto relative">
          {/* Headline and Intro */}
          <div className="text-center mb-4 sm:mb-2 flex items-center justify-center min-h-[80px] sm:min-h-[100px] px-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
              Own the <span style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4)' }}>Sexiest</span> Business. Get <span style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4)' }}>Paid</span> Every Day
            </h1>
          </div>

          {/* Form Card */}
          <div className="glow-card p-6 sm:p-8 mb-8 sm:mb-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    {...register('firstName', { required: 'First name is required' })}
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-400">{errors.firstName.message}</p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    {...register('lastName', { required: 'Last name is required' })}
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-400">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  {...register('phone', { required: 'Phone number is required' })}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email address'
                    }
                  })}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>

              <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 transition-all duration-500 ease-in-out overflow-hidden ${showAdvancedFields ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                {/* Price */}
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-300 mb-2">
                    Price
                  </label>
                  <input
                    {...register('price', { 
                      required: 'Price is required',
                      min: { value: 0, message: 'Price must be positive' }
                    })}
                    type="number"
                    id="price"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors no-spinner"
                    placeholder="Enter price"
                    min="0"
                    step="0.01"
                  />
                  {errors.price && (
                    <p className="mt-1 text-sm text-red-400">{errors.price.message}</p>
                  )}
                </div>

                {/* Salesman */}
                <div>
                  <label htmlFor="salesman" className="block text-sm font-medium text-gray-300 mb-2">
                    Salesman
                  </label>
                  <input
                    {...register('salesman', { required: 'Salesman is required' })}
                    type="text"
                    id="salesman"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter salesman name"
                  />
                  {errors.salesman && (
                    <p className="mt-1 text-sm text-red-400">{errors.salesman.message}</p>
                  )}
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit and Get Started'}
              </button>
            </form>
          </div>

          {/* Next Steps Section */}
          <div className="glow-card p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">What happens next</h2>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  1
                </div>
                <div>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    First, we'll send a straightforward contract to your email to outline everything clearly.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  2
                </div>
                <div>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Once signed, you'll receive an invoice to secure your spot.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  3
                </div>
                <div>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    After payment, an onboarding email arrives with a link to book your call with the team and join our dedicated communication channel—getting you set up without any guesswork.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Toggle Button for Advanced Fields */}
        <button
          onClick={() => setShowAdvancedFields(!showAdvancedFields)}
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 z-50"
          title={showAdvancedFields ? "Hide advanced fields" : "Show advanced fields"}
        >
          <svg 
            className={`w-6 h-6 transition-transform duration-300 ${showAdvancedFields ? 'rotate-45' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  );
}
