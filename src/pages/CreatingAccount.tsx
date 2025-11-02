import React from "react";
import { ArrowLeft, CheckCircle2, Mail, Shield, Clock } from "lucide-react";

export default function CreatingAccount() {
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
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Creating and Verifying Your Account</h1>
          <p className="text-base text-gray-700 leading-relaxed">
            Learn how to create a SaveCash account, verify your email, and set up your profile for the best experience.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12 text-base text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">1. Signing Up for SaveCash</h2>
            <p className="mb-4">Creating a SaveCash account is quick and straightforward. Follow these steps:</p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6 py-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 1: Visit the Signup Page</h3>
                <p className="mb-3">Navigate to the SaveCash website and click on "Get Early Access" or "Sign Up" button prominently displayed on the homepage.</p>
                <p>You can also access the signup page directly from any page by clicking the "Sign Up" button in the navigation menu.</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6 py-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 2: Enter Your Information</h3>
                <p className="mb-3">You'll need to provide:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Full Name:</strong> Your legal name as it appears on official documents</li>
                  <li><strong>Email Address:</strong> A valid email address you check regularly</li>
                  <li><strong>Password:</strong> A strong password (at least 12 characters with mix of letters, numbers, and symbols)</li>
                </ul>
                <p className="mt-3">All fields are required for account creation.</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6 py-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 3: Accept Terms and Conditions</h3>
                <p className="mb-3">Before creating your account, you must review and accept:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Terms of Service</li>
                  <li>Privacy Policy</li>
                  <li>Data Processing Agreement</li>
                </ul>
                <p className="mt-3">You can read these documents by clicking the links provided. Acceptance is required to proceed.</p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-6 py-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 4: Submit Your Information</h3>
                <p className="mb-3">After filling in all required fields and accepting the terms, click the "Create Account" or "Get Started" button.</p>
                <p>You'll see a confirmation message indicating that a verification email has been sent to your email address.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">2. Email Verification Process</h2>
            <p className="mb-4">Email verification is a critical security step that ensures you own the email address you used to sign up.</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.1 Receiving the Verification Email</h3>
            <p className="mb-4">After signing up, you'll receive an email from SaveCash (from privacy.savecash@gmail.com) with the subject line "Verify Your SaveCash Account."</p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email Delivery Times</h4>
                  <p className="text-sm mb-2">Verification emails are typically delivered within:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>1-2 minutes for most email providers</li>
                    <li>Up to 5 minutes for some corporate email systems</li>
                    <li>Up to 10 minutes during peak times</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.2 Checking Your Email</h3>
            <p className="mb-4">Follow these steps to find and open your verification email:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Check your inbox for an email from SaveCash</li>
              <li>If you don't see it, check your spam or junk folder</li>
              <li>Search for "SaveCash" or "verify" in your email search</li>
              <li>Add privacy.savecash@gmail.com to your contacts to prevent future emails from going to spam</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.3 Clicking the Verification Link</h3>
            <p className="mb-4">The verification email contains a prominent button or link to verify your account:</p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">What Happens When You Click</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>You'll be redirected to SaveCash</li>
                    <li>Your account will be automatically verified</li>
                    <li>You'll see a confirmation message</li>
                    <li>You can then log in and start using SaveCash</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.4 Verification Link Expiration</h3>
            <p className="mb-4">Verification links are valid for 24 hours from the time they're sent. If your link expires:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You can request a new verification email from the signup page</li>
              <li>Look for the "Resend Verification Email" option</li>
              <li>New links are sent immediately and expire after 24 hours</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.5 Troubleshooting Verification Issues</h3>
            <p className="mb-4">If you're having trouble with email verification:</p>
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Email Not Received</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Check spam/junk folders</li>
                  <li>Verify you entered the correct email address</li>
                  <li>Wait up to 10 minutes and check again</li>
                  <li>Request a new verification email</li>
                  <li>Contact support if issues persist after 24 hours</li>
                </ul>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Link Not Working</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Ensure the link hasn't expired (24-hour limit)</li>
                  <li>Try copying and pasting the link into your browser</li>
                  <li>Request a new verification email if expired</li>
                  <li>Clear your browser cache and cookies</li>
                  <li>Try a different browser</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">3. Account Security Setup</h2>
            <p className="mb-4">After verifying your email, it's important to set up security features to protect your account.</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.1 Creating a Strong Password</h3>
            <p className="mb-4">Your password is your first line of defense. Here's how to create a strong one:</p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Password Requirements</h4>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong>Minimum 12 characters:</strong> Longer passwords are more secure</li>
                <li><strong>Mix of characters:</strong> Include uppercase, lowercase, numbers, and symbols</li>
                <li><strong>No personal information:</strong> Avoid names, birthdays, or easily guessable words</li>
                <li><strong>Unique password:</strong> Don't reuse passwords from other accounts</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.2 Two-Factor Authentication (2FA)</h3>
            <p className="mb-4">We highly recommend enabling 2FA for additional security:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Account Settings → Security</li>
              <li>Click "Enable Two-Factor Authentication"</li>
              <li>Choose your preferred method (SMS or authenticator app)</li>
              <li>Follow the setup instructions</li>
              <li>Save your backup codes in a secure location</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.3 Security Questions</h3>
            <p className="mb-4">Setting up security questions helps with account recovery:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Choose questions only you know the answers to</li>
              <li>Use answers that won't change over time</li>
              <li>Don't use easily guessable information</li>
              <li>Consider using a password manager to store answers securely</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">4. Completing Your Profile</h2>
            <p className="mb-4">After verification, you'll be prompted to complete your profile. This helps SaveCash provide better recommendations.</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.1 Required Information</h3>
            <p className="mb-4">The following information is required to get started:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Full name (already provided during signup)</li>
              <li>Email address (already verified)</li>
              <li>Password (already set)</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.2 Optional Information</h3>
            <p className="mb-4">You can optionally provide:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Phone Number:</strong> For SMS notifications and account recovery</li>
              <li><strong>Date of Birth:</strong> For age verification and personalized recommendations</li>
              <li><strong>Location:</strong> For region-specific savings opportunities</li>
              <li><strong>Financial Goals:</strong> Initial savings goals to help prioritize recommendations</li>
              <li><strong>Income Range:</strong> For personalized budgeting suggestions</li>
            </ul>
            <p className="mb-4">You can add or update this information at any time from your account settings.</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.3 Profile Completion Benefits</h3>
            <p className="mb-4">A complete profile helps SaveCash:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Better Recommendations</h4>
                <p className="text-sm">More accurate savings opportunities tailored to your situation</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Personalized Experience</h4>
                <p className="text-sm">Customized dashboard and features based on your needs</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">5. What Happens After Account Creation</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.1 Immediate Access</h3>
            <p className="mb-4">Once your email is verified, you can immediately:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Access your SaveCash dashboard</li>
              <li>Browse features and settings</li>
              <li>View onboarding tutorials</li>
              <li>Connect your first bank account</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.2 Welcome Email Series</h3>
            <p className="mb-4">You'll receive a series of welcome emails over the first week:</p>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">Day 1: Welcome & Getting Started</p>
                <p className="text-sm text-gray-600">Overview of SaveCash features and next steps</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">Day 3: Connecting Accounts</p>
                <p className="text-sm text-gray-600">Tips for securely connecting your bank accounts</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">Day 7: Maximizing Your Savings</p>
                <p className="text-sm text-gray-600">Advanced features and best practices</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.3 Initial Setup Recommended Steps</h3>
            <p className="mb-4">To get the most out of SaveCash, we recommend:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Complete your profile (if you skipped it initially)</li>
              <li>Enable two-factor authentication</li>
              <li>Connect at least one bank account</li>
              <li>Set up your first financial goal</li>
              <li>Review and customize your notification preferences</li>
              <li>Download the mobile app for on-the-go access</li>
            </ol>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">6. Account Verification Status</h2>
            <p className="mb-4">You can check your verification status at any time:</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.1 Verified Account</h3>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Full Access</h4>
                  <p className="text-sm">Your account is fully verified and you have access to all SaveCash features.</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.2 Unverified Account</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-yellow-600" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Limited Access</h4>
                  <p className="text-sm">Some features may be restricted until you verify your email. Check your inbox for the verification email.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">7. Need More Help?</h2>
            <p className="mb-4">If you're experiencing issues with account creation or verification:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Visit our <a href="/help" className="text-blue-600 hover:underline">Help Center</a> for more guides</li>
              <li>Check our <a href="/faq" className="text-blue-600 hover:underline">FAQ page</a> for common questions</li>
              <li>Contact support at <a href="mailto:privacy.savecash@gmail.com" className="text-blue-600 hover:underline">privacy.savecash@gmail.com</a></li>
              <li>Visit our <a href="/support" className="text-blue-600 hover:underline">Support page</a> for additional resources</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

