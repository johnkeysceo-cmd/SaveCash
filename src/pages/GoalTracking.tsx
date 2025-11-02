import React from "react";
import { ArrowLeft, Target, TrendingUp, BarChart3, CheckCircle2 } from "lucide-react";

export default function GoalTracking() {
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
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Financial Goal Tracking</h1>
          <p className="text-base text-gray-700 leading-relaxed">
            Learn how to track your financial goals effectively and use SaveCash's goal tracking features to stay motivated and achieve your targets.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12 text-base text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">1. Understanding Goal Tracking</h2>
            <p className="mb-4">Goal tracking transforms abstract financial aspirations into concrete, measurable targets with clear progress indicators.</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.1 Why Track Goals?</h3>
            <p className="mb-4">Research shows that people who track goals are:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>42% more likely to achieve their targets</li>
              <li>More motivated through visible progress</li>
              <li>Better at making financial decisions aligned with goals</li>
              <li>More aware of their spending patterns</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.2 Types of Goals You Can Track</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Savings Goals</h4>
                <p className="text-sm">Emergency funds, vacations, down payments, major purchases</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Debt Goals</h4>
                <p className="text-sm">Pay off credit cards, student loans, car loans, mortgages</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Investment Goals</h4>
                <p className="text-sm">Retirement, wealth building, passive income targets</p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Spending Goals</h4>
                <p className="text-sm">Monthly budget targets, category limits, lifestyle changes</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">2. Setting Up Goals</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.1 Creating a New Goal</h3>
            <p className="mb-4">To create a financial goal:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to Goals → Create New Goal</li>
              <li>Select goal type (Savings, Debt, Investment, etc.)</li>
              <li>Enter target amount</li>
              <li>Set target date</li>
              <li>Choose funding accounts</li>
              <li>Set priority level</li>
              <li>Save and start tracking</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.2 Goal Parameters</h3>
            <p className="mb-4">Each goal includes:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Target Amount:</strong> How much you want to save or pay off</li>
              <li><strong>Target Date:</strong> When you want to achieve the goal</li>
              <li><strong>Current Progress:</strong> Amount saved or paid so far</li>
              <li><strong>Monthly Target:</strong> Required monthly savings to hit goal</li>
              <li><strong>Priority Level:</strong> High, medium, or low priority</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.3 Smart Goal Recommendations</h3>
            <p className="mb-4">SaveCash can suggest goal targets based on:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your income and expenses</li>
              <li>Similar users' successful goals</li>
              <li>Financial best practices</li>
              <li>Your historical savings patterns</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">3. Tracking Progress</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.1 Visual Progress Indicators</h3>
            <p className="mb-4">Each goal displays:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Progress Bar:</strong> Visual representation of completion percentage</li>
              <li><strong>Amount Remaining:</strong> How much more you need</li>
              <li><strong>Days Remaining:</strong> Time left to reach your target</li>
              <li><strong>On Track Status:</strong> Whether you're ahead or behind schedule</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.2 Progress Updates</h3>
            <p className="mb-4">You'll receive updates:</p>
            <div className="space-y-3">
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">Weekly Progress Reports</p>
                <p className="text-sm text-gray-600">How much you saved toward each goal this week</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">Milestone Celebrations</p>
                <p className="text-sm text-gray-600">Notifications at 25%, 50%, 75%, and 90% completion</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <p className="font-semibold text-gray-900">Timeline Adjustments</p>
                <p className="text-sm text-gray-600">Alerts if you're falling behind and suggestions to get back on track</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.3 Historical Tracking</h3>
            <p className="mb-4">View your goal progress over time:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Progress charts showing growth over time</li>
              <li>Contribution history (when and how much you added)</li>
              <li>Comparison to projected timeline</li>
              <li>Trend analysis (accelerating or slowing progress)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">4. Automated Goal Contributions</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.1 Setting Up Automatic Contributions</h3>
            <p className="mb-4">Automate savings toward your goals:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Go to your goal → Settings</li>
              <li>Enable "Automatic Contributions"</li>
              <li>Set contribution amount and frequency</li>
              <li>Choose source account</li>
              <li>Set start date</li>
              <li>Save and activate</li>
            </ol>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.2 Smart Contribution Features</h3>
            <p className="mb-4">SaveCash can automatically:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Round up purchases and add to goals</li>
              <li>Transfer surplus cash to goals when available</li>
              <li>Adjust contributions based on cash flow</li>
              <li>Prioritize contributions to high-priority goals</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.3 Goal Allocation</h3>
            <p className="mb-4">When you have multiple goals, SaveCash helps allocate savings:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Equal distribution across all goals</li>
              <li>Priority-based allocation (high priority goals get more)</li>
              <li>Timeline-based (goals with earlier dates prioritized)</li>
              <li>Custom allocation percentages you set</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">5. Managing Multiple Goals</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.1 Goal Prioritization</h3>
            <p className="mb-4">Set priorities to focus savings:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>High Priority:</strong> Goals you want to achieve first (like emergency fund)</li>
              <li><strong>Medium Priority:</strong> Important but not urgent goals</li>
              <li><strong>Low Priority:</strong> Nice-to-have goals that can wait</li>
            </ul>
            <p className="mb-4">High priority goals get first allocation of savings opportunities.</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.2 Goal Organization</h3>
            <p className="mb-4">Organize goals by:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Category (savings, debt, investment)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">6. Goal Analytics and Insights</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.1 Success Probability</h3>
            <p className="mb-4">SaveCash calculates your probability of achieving each goal based on:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Current savings rate</li>
              <li>Time remaining until target date</li>
              <li>Historical progress patterns</li>
              <li>Income and expense projections</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.2 Timeline Projections</h3>
            <p className="mb-4">See projected completion dates:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Current timeline based on recent progress</li>
              <li>Accelerated timeline if you increase contributions</li>
              <li>Delayed timeline if progress slows</li>
              <li>Best-case and worst-case scenarios</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.3 Recommendations</h3>
            <p className="mb-4">Get personalized recommendations:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Suggestions to accelerate goal achievement</li>
              <li>Ways to free up money for goals</li>
              <li>Adjustments to make goals more realistic</li>
              <li>Opportunities to combine or consolidate goals</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">7. Goal Completion and Next Steps</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.1 Completing a Goal</h3>
            <p className="mb-4">When you reach your target:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You'll receive a celebration notification</li>
              <li>Goal status changes to "Completed"</li>
              <li>You can choose what to do with the funds</li>
              <li>Create a new goal or reallocate to existing goals</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.2 Adjusting Goals</h3>
            <p className="mb-4">Life changes, and goals can too:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Increase or decrease target amounts</li>
              <li>Extend or shorten timelines</li>
              <li>Change priority levels</li>
              <li>Pause goals temporarily</li>
              <li>Split goals into smaller milestones</li>
            </ul>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">8. Best Practices</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Start with One Goal</h3>
                <p className="text-sm">Focus on one goal at a time to build momentum before adding more.</p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Review Weekly</h3>
                <p className="text-sm">Check your goal progress weekly to stay motivated and make adjustments.</p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Celebrate Milestones</h3>
                <p className="text-sm">Acknowledge progress along the way—it keeps you motivated for the long term.</p>
              </div>
            </div>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Need More Help?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>See our <a href="/help/financial-goals" className="text-blue-600 hover:underline">Financial Goals guide</a></li>
              <li>Contact support at <a href="mailto:privacy.savecash@gmail.com" className="text-blue-600 hover:underline">privacy.savecash@gmail.com</a></li>
              <li>Visit our <a href="/help" className="text-blue-600 hover:underline">Help Center</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

