import React from 'react';

const WalletPage = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-black">Earnings</h1>
          <a href="www" className="text-sm text-gray-500">
            Learn more about this page
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="p-6 bg-white border rounded-lg">
            <h2 className="text-lg font-semibold text-black mb-2">
              Available funds
            </h2>
            <p className="text-2xl font-bold text-black">$0.00</p>
            <button className="mt-6 w-full bg-gray-300 text-gray-700 font-semibold py-2 rounded-lg cursor-not-allowed">
              Withdraw balance
            </button>
            <a href="www" className="block mt-4 text-sm text-gray-500">
              Manage payout methods
            </a>
          </div>

          <div className="p-6 bg-white border rounded-lg">
            <h2 className="text-lg font-semibold text-black mb-2">
              Future payments
            </h2>
            <p className="text-2xl font-bold text-black">$0.00</p>
            <p className="text-sm text-gray-500">Payments for active orders</p>
            <p className="text-gray-400 mt-4">Coming soon</p>
          </div>

          <div className="p-6 bg-white border rounded-lg">
            <h2 className="text-lg font-semibold text-black mb-2">
              Earnings & expenses
            </h2>
            <p className="text-2xl font-bold text-black mb-2">$0.00</p>
            <p className="text-sm text-gray-500">
              Your earnings since joining.
            </p>
            <p className="text-2xl font-bold text-black mt-4">$0.00</p>
            <p className="text-sm text-gray-500">Expenses to date</p>
            <p className="text-sm text-gray-500 mt-2">
              Earnings spent on purchases since joining.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6 text-sm">
          <div className="flex space-x-4 ">
            <button className="px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg">
              Date range
            </button>
            <button className="px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg">
              Activity
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg">
              Email activity report
            </button>
            <p className="text-center text-gray-500">Showing 0 results.</p>
          </div>
        </div>

        <div className="bg-white p-6 border rounded-lg">
          <div className="flex flex-col items-center mt-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Illustration"
              className="mb-6"
            />
            <h2 className="text-lg font-semibold text-gray-500">
              Beginnings are so exciting!
            </h2>
            <p className="text-sm text-gray-500">
              You'll find all your earnings info here once you complete your
              first order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
