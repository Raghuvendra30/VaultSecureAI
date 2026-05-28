import { FaSearchDollar, FaShieldAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleBackButton = (event) => {
      event.preventDefault();
      const confirmLeave = window.confirm('Do you want to log out?');
      if (confirmLeave) {
        navigate('/login');
      } else {
        window.history.pushState(null, '', window.location.pathname);
      }
    };

    // Push current state to prevent immediate back
    window.history.pushState(null, '', window.location.pathname);
    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [navigate]);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 p-6 overflow-hidden">
      <h1 className="text-3xl font-bold text-purple-700 mb-10">Choose Your Tool</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Anomaly Checker */}
        <div
          onClick={() => navigate('/anomaly-checker')}
          className="cursor-pointer bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 p-6 flex flex-col items-center text-center"
        >
          <FaShieldAlt className="text-purple-600 text-5xl mb-4" />
          <h2 className="text-xl font-semibold text-purple-700">Anomaly Checker</h2>
          <p className="text-sm text-gray-600 mt-2">
            Detect suspicious activity by learning normal spending patterns and flagging outliers.
          </p>
        </div>

        {/* Loan Fraud Assessor */}
        <div
          onClick={() => navigate('/loan-fraud-assessor')}
          className="cursor-pointer bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 p-6 flex flex-col items-center text-center"
        >
          <FaSearchDollar className="text-blue-600 text-5xl mb-4" />
          <h2 className="text-xl font-semibold text-blue-700">Loan Fraud Assessor</h2>
          <p className="text-sm text-gray-600 mt-2">
            Analyze loan applications for fraud risk using pattern-based detection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
