import React from "react";
import { ArrowLeft, Target, TrendingUp, Calendar, BarChart3 } from "lucide-react";

export default function FinancialGoals() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="mb-6">
            <a 
              href="/help"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Help Center
            </a>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Setting Up Financial Goals</h1>
          
          <p className="text-base text-gray-700 leading-relaxed">
            Financial goals give you direction and motivation while helping SaveCash prioritize savings opportunities that matter most to you. This comprehensive guide will help you set, track, and achieve your financial goals.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12 text-base text-gray-700 leading-relaxed">
            
            {/* Section 1: Why Set Financial Goals */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">1. Why Set Financial Goals with SaveCash?</h2>
              
              <p className="mb-4">
                Setting financial goals in SaveCash does more than just track your progress—it transforms how we help you save. Here's why goals matter:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <Target className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Personalized Prioritization</h3>
                  <p className="text-sm">
                    SaveCash prioritizes savings opportunities that align with your specific goals, ensuring every dollar saved moves you closer to what you want to achieve.
                  </p>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <TrendingUp className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Motivation & Clarity</h3>
                  <p className="text-sm">
                    Clear goals provide motivation and help you make better financial decisions. Seeing progress toward your goals keeps you engaged and committed.
                  </p>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <Calendar className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Timeline Management</h3>
                  <p className="text-sm">
                    Goals help you plan for specific timelines, whether it's a vacation in 6 months or retirement in 30 years.
                  </p>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <BarChart3 className="w-8 h-8 text-orange-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Progress Tracking</h3>
                  <p className="text-sm">
                    Visual progress bars and detailed analytics show exactly how close you are to achieving each goal.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Types of Financial Goals */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">2. Types of Financial Goals</h2>
              
              <p className="mb-4">
                SaveCash supports various types of financial goals. You can set multiple goals simultaneously and prioritize them based on importance.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.1 Emergency Fund</h3>
              <p className="mb-4">
                An emergency fund is money set aside to cover unexpected expenses, such as medical bills, car repairs, or job loss. Financial experts recommend saving 3-6 months of expenses.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Why It Matters</h4>
                <p className="text-sm mb-3">
                  An emergency fund prevents you from going into debt when unexpected expenses arise. It provides peace of mind and financial security.
                </p>
                <h4 className="font-semibold text-gray-900 mb-2">How SaveCash Helps</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Prioritizes aggressive savings opportunities</li>
                  <li>Suggests high-yield savings accounts</li>
                  <li>Identifies areas to cut spending quickly</li>
                  <li>Tracks progress toward your target amount</li>
                </ul>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.2 Vacation & Travel</h3>
              <p className="mb-4">
                Save for that dream vacation, honeymoon, or bucket-list trip. Set a target amount and date, and SaveCash will help you reach it.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Tips for Vacation Goals</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Include flights, accommodations, food, and activities in your target</li>
                  <li>Add a 10-15% buffer for unexpected expenses</li>
                  <li>Set your goal date 1-2 months before travel for booking</li>
                  <li>SaveCash can find deals and discounts as you save</li>
                </ul>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.3 Debt Payoff</h3>
              <p className="mb-4">
                Accelerate your debt payoff by consolidating savings and applying them to your debts. SaveCash helps identify which debts to pay first.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Debt Payoff Strategies</h4>
                <p className="text-sm mb-3">
                  SaveCash supports both strategies:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li><strong>Debt Snowball:</strong> Pay smallest debts first for quick wins</li>
                  <li><strong>Debt Avalanche:</strong> Pay highest interest rates first to save money</li>
                  <li>SaveCash can help you choose based on your psychology and financial situation</li>
                </ul>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.4 Major Purchase</h3>
              <p className="mb-4">
                Save for a car, home down payment, wedding, or any other significant purchase. SaveCash helps you reach your target on time.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Examples of Major Purchases</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Car or vehicle</li>
                  <li>Home down payment (typically 20% of purchase price)</li>
                  <li>Wedding expenses</li>
                  <li>Home renovations or repairs</li>
                  <li>Large appliances or furniture</li>
                  <li>Medical procedures or expenses</li>
                </ul>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.5 Retirement</h3>
              <p className="mb-4">
                Build long-term wealth for retirement. SaveCash helps maximize your retirement savings through intelligent savings allocation.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Retirement Planning with SaveCash</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Track contributions to 401(k), IRA, and other retirement accounts</li>
                  <li>Identify opportunities to increase retirement contributions</li>
                  <li>Find tax-advantaged savings opportunities</li>
                  <li>Project future retirement income based on current savings rate</li>
                </ul>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.6 Custom Goals</h3>
              <p className="mb-4">
                Create custom goals for anything else you want to save for. The possibilities are endless:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Starting a business</li>
                <li>Education or training</li>
                <li>Hobby or passion project</li>
                <li>Gift or donation</li>
                <li>Investment portfolio</li>
                <li>Any personal financial target</li>
              </ul>
            </section>

            {/* Section 3: Setting Up Goals */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">3. How to Set Up Financial Goals</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6 py-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 1: Access Goals Section</h3>
                  <p className="mb-3">
                    From your SaveCash dashboard, click on "Goals" in the main navigation or find the "Set a Goal" button on your dashboard.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-6 py-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 2: Choose Goal Type</h3>
                  <p className="mb-3">
                    Select from the predefined goal types (Emergency Fund, Vacation, Debt Payoff, etc.) or choose "Custom Goal" for something unique.
                  </p>
                  <p>
                    Each goal type has specific templates and recommendations to help you set realistic targets.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6 py-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 3: Set Target Amount</h3>
                  <p className="mb-3">
                    Enter how much money you need to save for this goal. SaveCash will provide suggestions based on:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
                    <li>Your current income and expenses</li>
                    <li>Similar goals from other users (anonymized)</li>
                    <li>Industry standards for the goal type</li>
                  </ul>
                  <p>
                    Don't worry—you can always adjust the target amount later.
                  </p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-6 py-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 4: Set Target Date</h3>
                  <p className="mb-3">
                    Choose when you want to achieve this goal. SaveCash will:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
                    <li>Calculate how much you need to save per month</li>
                    <li>Determine if the timeline is realistic</li>
                    <li>Suggest adjustments if the goal seems too ambitious or conservative</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-teal-500 pl-6 py-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 5: Prioritize Your Goal</h3>
                  <p className="mb-3">
                    If you have multiple goals, assign a priority level (High, Medium, Low). This helps SaveCash:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Allocate savings opportunities to the most important goals</li>
                    <li>Provide recommendations that align with your priorities</li>
                    <li>Show you which goals to focus on first</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-pink-500 pl-6 py-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 6: Select Funding Accounts</h3>
                  <p className="mb-3">
                    Choose which accounts should contribute to this goal. You can:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Use specific savings accounts</li>
                    <li>Allocate a portion of your checking account</li>
                    <li>Include multiple accounts</li>
                    <li>Create automatic transfers</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-indigo-500 pl-6 py-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 7: Review and Create</h3>
                  <p className="mb-3">
                    Review your goal settings, make any final adjustments, and click "Create Goal." SaveCash will immediately start:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Tracking progress toward your goal</li>
                    <li>Prioritizing savings opportunities</li>
                    <li>Providing monthly progress updates</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4: Tracking Progress */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">4. Tracking Your Goal Progress</h2>
              
              <p className="mb-4">
                SaveCash provides comprehensive tracking and visualization for all your goals:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.1 Visual Progress Indicators</h3>
              <p className="mb-4">
                Each goal includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Progress Bar:</strong> Visual representation of how close you are to your target</li>
                <li><strong>Percentage Complete:</strong> Exact percentage toward your goal</li>
                <li><strong>Amount Remaining:</strong> How much more you need to save</li>
                <li><strong>Days Remaining:</strong> Time left to reach your goal</li>
                <li><strong>Projected Completion:</strong> Estimated date based on current savings rate</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.2 Monthly Updates</h3>
              <p className="mb-4">
                You'll receive monthly progress reports showing:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>How much you saved toward each goal that month</li>
                <li>Total progress across all goals</li>
                <li>Comparison to previous months</li>
                <li>Recommendations if you're behind schedule</li>
                <li>Celebrations when you hit milestones</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.3 Milestone Celebrations</h3>
              <p className="mb-4">
                SaveCash celebrates your achievements:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>25% milestone</li>
                <li>50% milestone (halfway there!)</li>
                <li>75% milestone</li>
                <li>90% milestone (almost there!)</li>
                <li>Goal completion (congratulations!)</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.4 Progress Analytics</h3>
              <p className="mb-4">
                Detailed analytics include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Savings rate over time</li>
                <li>Comparison to your projected timeline</li>
                <li>Breakdown of where savings came from (automated vs manual)</li>
                <li>Impact of SaveCash savings on goal progress</li>
              </ul>
            </section>

            {/* Section 5: How SaveCash Helps Achieve Goals */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">5. How SaveCash Helps You Achieve Your Goals</h2>
              
              <p className="mb-4">
                Once you set goals, SaveCash actively works to help you achieve them faster:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.1 Prioritized Savings Opportunities</h3>
              <p className="mb-4">
                SaveCash prioritizes savings that directly contribute to your goals:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>High-priority goals get first access to the best savings opportunities</li>
                <li>Automated actions are approved faster for goal-related savings</li>
                <li>We find more aggressive savings when you're behind on a goal</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.2 Automatic Goal Contributions</h3>
              <p className="mb-4">
                With your approval, SaveCash can:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Automatically transfer savings to your goal accounts</li>
                <li>Round up transactions and contribute the difference</li>
                <li>Allocate windfalls (tax refunds, bonuses) to goals</li>
                <li>Rebalance contributions between goals as priorities change</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.3 Goal-Specific Recommendations</h3>
              <p className="mb-4">
                SaveCash provides targeted recommendations:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>For emergency funds: High-yield savings account suggestions</li>
                <li>For vacations: Travel deal alerts and booking discounts</li>
                <li>For debt payoff: Balance transfer opportunities and lower rates</li>
                <li>For retirement: Tax-advantaged account recommendations</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.4 Timeline Adjustments</h3>
              <p className="mb-4">
                If you're ahead or behind schedule, SaveCash will:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Suggest increasing savings rate if behind</li>
                <li>Recommend new goals if consistently ahead</li>
                <li>Adjust timeline recommendations based on your progress</li>
                <li>Help you rebalance goals as life circumstances change</li>
              </ul>
            </section>

            {/* Section 6: Managing Multiple Goals */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">6. Managing Multiple Goals</h2>
              
              <p className="mb-4">
                Most people have multiple financial goals. SaveCash helps you manage them all effectively:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.1 Goal Prioritization</h3>
              <p className="mb-4">
                When you have multiple goals, prioritize them:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>High Priority:</strong> Goals you want to achieve first (e.g., emergency fund)</li>
                <li><strong>Medium Priority:</strong> Important but not urgent goals</li>
                <li><strong>Low Priority:</strong> Nice-to-have goals that can wait</li>
              </ul>
              <p>
                SaveCash allocates savings opportunities based on priority levels.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.2 Allocation Strategies</h3>
              <p className="mb-4">
                You can set allocation rules:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Equal Split:</strong> Divide savings equally across all goals</li>
                <li><strong>Priority-Based:</strong> Higher priority goals get more funding</li>
                <li><strong>Custom Allocation:</strong> Set specific percentages for each goal</li>
                <li><strong>Sequential:</strong> Focus on one goal at a time</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.3 Rebalancing Goals</h3>
              <p className="mb-4">
                As circumstances change, you may need to adjust goals:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Increase or decrease target amounts</li>
                <li>Extend or shorten timelines</li>
                <li>Change priority levels</li>
                <li>Pause goals temporarily</li>
                <li>Complete goals early</li>
                <li>Delete goals that are no longer relevant</li>
              </ul>
            </section>

            {/* Section 7: Tips for Success */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">7. Tips for Achieving Your Goals</h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Be Realistic</h3>
                  <p className="text-sm">
                    Set achievable goals based on your actual income and expenses. Unrealistic goals lead to frustration and abandonment.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Start Small</h3>
                  <p className="text-sm">
                    Begin with smaller goals to build momentum. Once you achieve one, you'll be motivated to tackle larger goals.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Review Regularly</h3>
                  <p className="text-sm">
                    Check your goal progress weekly or monthly. Regular reviews help you stay on track and make adjustments as needed.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-pink-50 to-red-50 border border-pink-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Celebrate Milestones</h3>
                  <p className="text-sm">
                    Acknowledge your progress along the way. Celebrating milestones keeps you motivated for the long term.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Automate Contributions</h3>
                  <p className="text-sm">
                    Set up automatic transfers to your goal accounts. Automation removes the need for willpower and ensures consistent progress.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Common Questions */}
            <section className="scroll-mt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">8. Common Questions About Goals</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I have multiple goals at once?</h3>
                  <p className="mb-4">
                    Yes! SaveCash supports unlimited goals. You can set priorities and allocation strategies to manage them all effectively.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">What if I can't meet my goal timeline?</h3>
                  <p className="mb-4">
                    That's okay! Life happens. You can extend your timeline, reduce your target amount, or pause the goal. SaveCash will recalculate and adjust recommendations.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I change my goal after creating it?</h3>
                  <p className="mb-4">
                    Absolutely. You can modify the target amount, timeline, priority, or any other aspect of your goal at any time. Your progress is preserved.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">What happens when I complete a goal?</h3>
                  <p className="mb-4">
                    Congratulations! SaveCash will celebrate your achievement and you can choose to create a new goal or reallocate those savings to other existing goals.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Next Steps */}
            <section className="scroll-mt-8 border-t pt-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">9. Ready to Set Your First Goal?</h2>
              
              <p className="mb-4">
                Now that you understand how financial goals work in SaveCash, you're ready to create your first goal:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <a 
                  href="/dashboard"
                  className="border border-gray-200 rounded-lg p-6 hover:border-purple-500 hover:shadow-lg transition-all group"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
                    Go to Dashboard →
                  </h3>
                  <p className="text-sm text-gray-600">
                    Access your dashboard to create your first financial goal.
                  </p>
                </a>
                
                <a 
                  href="/help/getting-started"
                  className="border border-gray-200 rounded-lg p-6 hover:border-purple-500 hover:shadow-lg transition-all group"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
                    Getting Started →
                  </h3>
                  <p className="text-sm text-gray-600">
                    Review the getting started guide if you haven't already.
                  </p>
                </a>
              </div>
            </section>

        </div>
      </div>
    </div>
  );
}

