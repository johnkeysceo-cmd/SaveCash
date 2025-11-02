import React from "react";
import { ArrowLeft, Lock, Shield, AlertCircle } from "lucide-react";

export default function ChangingPassword() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="mb-6">
            <a href="/help" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Help Center
            </a>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Changing Your Password</h1>
          <p className="text-base text-gray-700 leading-relaxed">
            Learn how to change your SaveCash password securely and what to do if you've forgotten it.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12 text-base text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">1. How to Change Your Password</h2>
            <p className="mb-4">To change your password when you're logged in:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Account Settings → Security</li>
              <li>Click "Change Password"</li>
              <li>Enter your current password</li>
              <li>Enter your new password (twice for confirmation)</li>
              <li>Review password requirements</li>
              <li>Click "Update Password"</li>
            </ol>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
              <p className="text-sm"><strong>Success:</strong> Once changed, you'll need to log in again with your new password. You'll also receive a confirmation email.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">2. Password Requirements</h2>
            <p className="mb-4">Your new password must meet these requirements:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Minimum 12 characters:</strong> Longer passwords are significantly more secure</li>
              <li><strong>Uppercase letters:</strong> At least one capital letter (A-Z)</li>
              <li><strong>Lowercase letters:</strong> At least one lowercase letter (a-z)</li>
              <li><strong>Numbers:</strong> At least one number (0-9)</li>
              <li><strong>Special characters:</strong> At least one symbol (!@#$%^&*)</li>
              <li><strong>Cannot be your current password:</strong> Must be different from your existing password</li>
              <li><strong>Cannot be recently used:</strong> Cannot reuse your last 5 passwords</li>
            </ul>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
              <h3 className="font-semibold text-gray-900 mb-2">Tips for Creating a Strong Password</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Use a passphrase: Combine multiple words with numbers and symbols</li>
                <li>Avoid personal information: Don't use names, birthdays, or addresses</li>
                <li>Make it unique: Don't reuse passwords from other accounts</li>
                <li>Consider a password manager: Tools like 1Password or LastPass can generate and store secure passwords</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">3. Forgot Your Password?</h2>
            <p className="mb-4">If you've forgotten your password, you can reset it:</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.1 Password Reset Process</h3>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to the login page</li>
              <li>Click "Forgot Password?" link</li>
              <li>Enter the email address associated with your SaveCash account</li>
              <li>Click "Send Reset Link"</li>
              <li>Check your email for the password reset link</li>
              <li>Click the link (valid for 1 hour)</li>
              <li>Enter your new password (twice)</li>
              <li>Click "Reset Password"</li>
            </ol>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Security Note</h4>
                  <p className="text-sm">If you didn't request a password reset, ignore the email and your password will remain unchanged. If you receive multiple unexpected reset emails, contact support immediately as your account may be compromised.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">4. After Changing Your Password</h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.1 What Happens Immediately</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You'll be logged out of all devices for security</li>
              <li>You'll need to log in again with your new password</li>
              <li>A confirmation email will be sent to your registered email</li>
              <li>All active sessions will be terminated</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.2 Re-logging In</h3>
            <p className="mb-4">After changing your password, you'll need to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Log in again on all devices (web, mobile app)</li>
              <li>Update any saved passwords in your browser or password manager</li>
              <li>Re-authenticate if you're using biometric login</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.3 If Two-Factor Authentication is Enabled</h3>
            <p className="mb-4">If you have 2FA enabled, you'll need to:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Enter your new password</li>
              <li>Enter your 2FA code when prompted</li>
              <li>Complete the login process</li>
            </ol>
            <p className="mt-4">Your 2FA settings remain unchanged when you change your password.</p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">5. Password Security Best Practices</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Regular Updates</h3>
                <p className="text-sm">Change your password every 90 days, or immediately if you suspect it's been compromised.</p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Don't Share Passwords</h3>
                <p className="text-sm">Never share your password with anyone, including SaveCash support. We will never ask for your password.</p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Use a Password Manager</h3>
                <p className="text-sm">Password managers can generate strong, unique passwords and store them securely, so you don't need to remember them all.</p>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Enable Two-Factor Authentication</h3>
                <p className="text-sm">2FA adds an extra layer of security, so even if someone gets your password, they can't access your account.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">6. Troubleshooting Password Issues</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Reset Link Not Working</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Check if the link has expired (links expire after 1 hour)</li>
                  <li>Make sure you're clicking the most recent reset link</li>
                  <li>Try copying and pasting the link into your browser</li>
                  <li>Clear your browser cache and cookies</li>
                  <li>Request a new reset link if expired</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Not Receiving Reset Email</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Check your spam/junk folder</li>
                  <li>Verify you're using the correct email address</li>
                  <li>Wait up to 10 minutes for delivery</li>
                  <li>Check if your email provider is blocking our emails</li>
                  <li>Add privacy.savecash@gmail.com to your contacts</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Password Requirements Not Met</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Review all password requirements listed above</li>
                  <li>Use our password strength indicator as a guide</li>
                  <li>Try using a passphrase instead of a password</li>
                  <li>Ensure you're not reusing a recently used password</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">7. Account Recovery</h2>
            <p className="mb-4">If you can't reset your password and don't have access to your email:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Contact SaveCash support immediately</li>
              <li>Provide proof of identity (government-issued ID)</li>
              <li>Answer security questions if you set them up</li>
              <li>Provide any additional verification information requested</li>
            </ol>
            <p className="mb-4">Account recovery can take 24-48 hours for security verification. We take account security seriously and will verify your identity before granting access.</p>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Need More Help?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>See our <a href="/help/security-privacy" className="text-blue-600 hover:underline">Security & Privacy guide</a></li>
              <li>Contact support at <a href="mailto:privacy.savecash@gmail.com" className="text-blue-600 hover:underline">privacy.savecash@gmail.com</a></li>
              <li>Visit our <a href="/help" className="text-blue-600 hover:underline">Help Center</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

