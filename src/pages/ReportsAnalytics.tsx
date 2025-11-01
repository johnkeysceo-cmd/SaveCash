import React from "react";
import { ArrowLeft, BarChart3, TrendingUp, Download, Filter } from "lucide-react";

export default function ReportsAnalytics() {
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
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Reports and Analytics</h1>
          <p className="text-base text-gray-700 leading-relaxed">
            Understand your financial patterns with SaveCash's comprehensive reports and analytics. Track spending, savings, and trends to make better financial decisions.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12 text-base text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">1. Understanding Your Dashboard</h2>
            <p className="mb-4">Your SaveCash dashboard provides a comprehensive overview of your financial health with key metrics and visualizations.</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.1 Key Metrics</h3>
            <p className="mb-4">At a glance, you can see:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Total Savings</h4>
                <p className="text-sm">All-time savings from SaveCash optimizations</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Savings Rate</h4>
                <p className="text-sm">Percentage of income saved each month</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Net Worth</h4>
                <p className="text-sm">Assets minus liabilities across all accounts</p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Goal Progress</h4>
                <p className="text-sm">Overall progress across all financial goals</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1.2 Quick Views</h3>
            <p className="mb-4">Switch between different time periods:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Today's activity</li>
              <li>This week's summary</li>
              <li>This month's overview</li>
              <li>This year's totals</li>
              <li>All-time statistics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">2. Spending Reports</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.1 Category Breakdown</h3>
            <p className="mb-4">See exactly where your money goes:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Pie charts showing spending by category</li>
              <li>List view with exact amounts per category</li>
              <li>Comparison to previous periods</li>
              <li>Top spending categories highlighted</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.2 Spending Trends</h3>
            <p className="mb-4">Track how your spending changes over time:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Line charts showing monthly spending trends</li>
              <li>Identification of spending increases or decreases</li>
              <li>Seasonal pattern recognition</li>
              <li>Projected spending for upcoming months</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2.3 Merchant Analysis</h3>
            <p className="mb-4">See which merchants you spend most with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Top merchants by spending amount</li>
              <li>Frequency of purchases at each merchant</li>
              <li>Average transaction size</li>
              <li>Opportunities to consolidate or optimize</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">3. Savings Reports</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.1 Savings Breakdown</h3>
            <p className="mb-4">Understand where your savings come from:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Savings by category (subscriptions, bills, fees, etc.)</li>
              <li>Automated vs manual savings</li>
              <li>Top savings opportunities identified</li>
              <li>Savings rate trends over time</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.2 Savings Timeline</h3>
            <p className="mb-4">See your savings growth over time:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Cumulative savings chart</li>
              <li>Monthly savings contributions</li>
              <li>Growth rate calculations</li>
              <li>Projected savings for future months</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3.3 ROI Analysis</h3>
            <p className="mb-4">Calculate your return on SaveCash:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Savings vs subscription cost</li>
              <li>Time to positive ROI</li>
              <li>Annual savings projections</li>
              <li>Comparison to similar users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">4. Income and Cash Flow Reports</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.1 Income Tracking</h3>
            <p className="mb-4">Monitor all income sources:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Salary and wages</li>
              <li>Freelance and side income</li>
              <li>Investment returns</li>
              <li>Other income sources</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.2 Cash Flow Analysis</h3>
            <p className="mb-4">Understand money in vs money out:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Monthly income vs expenses</li>
              <li>Cash flow trends</li>
              <li>Surplus or deficit identification</li>
              <li>Forecasting future cash flow</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">4.3 Budget vs Actual</h3>
            <p className="mb-4">Compare planned vs actual spending:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Budget adherence percentage</li>
              <li>Categories over or under budget</li>
              <li>Suggestions for budget adjustments</li>
              <li>Historical budget performance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">5. Goal Progress Reports</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.1 Individual Goal Reports</h3>
            <p className="mb-4">Detailed progress for each goal:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Progress percentage and amount remaining</li>
              <li>Timeline to completion</li>
              <li>Contribution history</li>
              <li>On-track status and recommendations</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">5.2 Overall Goal Summary</h3>
            <p className="mb-4">View all goals together:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Total progress across all goals</li>
              <li>Goal completion timeline</li>
              <li>Priority-based progress breakdown</li>
              <li>Resource allocation analysis</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">6. Exporting Reports</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.1 Report Formats</h3>
            <p className="mb-4">Export reports in multiple formats:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>PDF:</strong> Formatted reports perfect for printing or sharing</li>
              <li><strong>CSV:</strong> Spreadsheet format for detailed analysis</li>
              <li><strong>Excel:</strong> Formatted spreadsheet with charts</li>
              <li><strong>JSON:</strong> Raw data for developers or advanced users</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.2 Custom Report Builder</h3>
            <p className="mb-4">Create custom reports with:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Select specific date ranges</li>
              <li>Choose categories to include or exclude</li>
              <li>Select which accounts to analyze</li>
              <li>Customize charts and visualizations</li>
              <li>Add notes and annotations</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">6.3 Scheduled Reports</h3>
            <p className="mb-4">Automatically receive reports:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Monthly spending summaries via email</li>
              <li>Quarterly financial health reports</li>
              <li>Annual savings summaries</li>
              <li>Custom schedule you set</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">7. Advanced Analytics</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.1 Predictive Analytics</h3>
            <p className="mb-4">AI-powered predictions:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Projected spending for upcoming months</li>
              <li>Savings forecast based on current patterns</li>
              <li>Goal completion probability</li>
              <li>Cash flow projections</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.2 Comparative Analysis</h3>
            <p className="mb-4">See how you compare:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Your spending vs similar users (anonymized)</li>
              <li>Savings rate benchmarks</li>
              <li>Category spending comparisons</li>
              <li>Financial health score vs average</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">7.3 Anomaly Detection</h3>
            <p className="mb-4">AI identifies unusual patterns:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Unusual spending spikes</li>
              <li>Unexpected income changes</li>
              <li>Potential errors or fraud</li>
              <li>Opportunities you might have missed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">8. Using Reports for Better Decisions</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">8.1 Monthly Reviews</h3>
            <p className="mb-4">Review reports monthly to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Identify spending patterns</li>
              <li>Catch budget overruns early</li>
              <li>Celebrate savings achievements</li>
              <li>Adjust goals and strategies</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">8.2 Goal Setting</h3>
            <p className="mb-4">Use reports to set realistic goals:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Base savings goals on actual spending patterns</li>
              <li>Identify realistic timelines</li>
              <li>Understand what you can afford to save</li>
              <li>Set targets that align with your lifestyle</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">8.3 Financial Planning</h3>
            <p className="mb-4">Reports inform major financial decisions:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Whether you can afford a major purchase</li>
              <li>How to allocate windfalls or bonuses</li>
              <li>When to increase savings contributions</li>
              <li>If lifestyle changes are sustainable</li>
            </ul>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">9. Privacy and Data</h2>
            <p className="mb-4">All reports use your financial data but:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Data is encrypted and stored securely</li>
              <li>Reports are only accessible to you</li>
              <li>You can export and delete your data anytime</li>
              <li>Anonymized data may be used for industry benchmarks</li>
            </ul>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Need More Help?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>See our <a href="/help/goal-tracking" className="text-blue-600 hover:underline">Goal Tracking guide</a></li>
              <li>Contact support at <a href="mailto:support@savecash.com" className="text-blue-600 hover:underline">support@savecash.com</a></li>
              <li>Visit our <a href="/help" className="text-blue-600 hover:underline">Help Center</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

