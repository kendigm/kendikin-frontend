import React from "react";
import { Link } from "react-router-dom";

const PaymentConfirm = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-semibold text-green-600 mb-4">Payment Successful!</h2>
                <p className="text-lg text-gray-700 mb-8">Thank you for your purchase. Your payment was successfully processed.</p>
                <div className="flex justify-center">
                    <Link to="/" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PaymentConfirm;
