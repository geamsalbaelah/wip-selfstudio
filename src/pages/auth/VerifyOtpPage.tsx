import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

const VerifyOtpPage: React.FC = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(60);
  const { user, verifyOtp, isLoading, error } = useAuthStore();
  const navigate = useNavigate();
  
  const otpInputRefs = Array(6)
    .fill(0)
    .map(() => React.createRef<HTMLInputElement>());
  
  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) return;
    
    const timerId = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    
    return () => clearTimeout(timerId);
  }, [timeLeft]);
  
  // If no user data (not coming from registration), redirect to login
  useEffect(() => {
    if (!user) {
      navigate('/auth/login');
    }
  }, [user, navigate]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    
    // Only allow digits
    if (value && !/^\d+$/.test(value)) return;
    
    // Update the OTP array
    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1); // Only take the first digit
    setOtp(newOtp);
    
    // Move to next input if a digit was entered
    if (value && index < 5) {
      otpInputRefs[index + 1].current?.focus();
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputRefs[index - 1].current?.focus();
    }
  };
  
  const handleResendOtp = () => {
    // In a real app, you would call an API to resend the OTP
    // For now, we'll just reset the timer
    setTimeLeft(60);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const otpString = otp.join('');
    if (otpString.length !== 6) return;
    
    try {
      await verifyOtp(user?.phone || '', otpString);
      navigate('/dashboard');
    } catch (error) {
      // Error is handled by the auth store
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Verify Your Phone</h2>
      <p className="text-gray-600 mb-6">
        We sent a verification code to +62{user?.phone || ''}
      </p>
      
      {error && (
        <div className="mb-4 bg-red-50 text-red-700 p-3 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
            Verification Code
          </label>
          <div className="flex justify-between items-center space-x-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={otpInputRefs[index]}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-full input text-center text-lg font-medium py-3"
                autoFocus={index === 0}
              />
            ))}
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={handleResendOtp}
            disabled={timeLeft > 0}
            className={`text-sm ${
              timeLeft > 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-primary-600 hover:text-primary-500'
            }`}
          >
            {timeLeft > 0 ? `Resend code in ${timeLeft}s` : 'Resend code'}
          </button>
          
          <button
            type="submit"
            disabled={otp.join('').length !== 6 || isLoading}
            className={`btn-primary px-6 py-2 ${
              otp.join('').length !== 6 || isLoading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Verifying...' : 'Verify'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default VerifyOtpPage;