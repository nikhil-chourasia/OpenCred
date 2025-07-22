import React from "react";

function FeatureCard({ icon, feature, description}) {
    return (
        <div className="feature-card border-stone-300 border w-[480px] flex flex-col items-center justify-center rounded-lg p-8 gap-4">
            <div className="icon-container flex justify-center items-center bg-blue-600 p-4 w-16 h-16 rounded-full">
                <img src={icon} className="w-8"/>
            </div>
            <div className="feature-heading text-2xl font-bold py-2 text-black font-bold text-center">
                {feature}
            </div>
            <div className="feature-content flex flex-col items-center test-base text-black font-base text-center">
                {description}
            </div>
        </div>
    )
}

export default FeatureCard