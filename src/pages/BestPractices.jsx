import React from "react";
import { Link } from "react-router-dom";
import { faTextStyles } from "../style/twUtils";
import fa from "../texts/fa";

const BestPractices = () => (
    <div className="p-6 rtl">
        {/*region Page Title */}
        <h1 className={faTextStyles.mainTitle} dir="rtl">
            {fa.bestPractices.title}
        </h1>
        <p className={faTextStyles.description} dir="rtl">
            {fa.bestPractices.description}
        </p>
        {/*endregion*/}

        {/*region Best Practice Tips List */}
        <h2 className={faTextStyles.title} dir="rtl">
            نکات مهم
        </h2>
        <ul className="text-gray-600 text-right leading-loose list-disc pr-4" dir="rtl">
            {fa.bestPractices.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
            ))}
        </ul>
        {/*endregion*/}

        {/*region Navigation */}
        <div className="mt-8 text-right" dir="rtl">
            <Link to="/" className="text-blue-600 hover:underline">
                {fa.bestPractices.nextPageLink}
            </Link>
        </div>
        {/*endregion*/}
    </div>
);

export default BestPractices;
