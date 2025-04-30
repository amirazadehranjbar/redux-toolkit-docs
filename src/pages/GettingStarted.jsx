import React from "react";
import CodeBlock from "../components/CodeBlock";
import {faTextStyles} from "../style/twUtils";
import fa from "../texts/fa";
import {Link} from "react-router-dom";

const GettingStarted = () => (
    <div className="p-6 rtl">
        <h1 className={faTextStyles.mainTitle} dir="rtl">
            {fa.gettingStarted.title}
        </h1>

        <p className={faTextStyles.description} dir="rtl">
            {fa.gettingStarted.installation}
        </p>
        <div className="ltr mb-6">
            <CodeBlock code={fa.gettingStarted.installCommand} language="bash"/>
        </div>

        <h2 className={faTextStyles.title} dir="rtl">
            {fa.gettingStarted.usageTitle}
        </h2>
        <p className={faTextStyles.description} dir="rtl">
            {fa.gettingStarted.usageDescription}
        </p>
        <div className="ltr mb-6">
            <CodeBlock
                code={`import { configureStore } from '@reduxjs/toolkit';\n\nconst store = configureStore({\n  reducer: {},\n});`}
                language="javascript"
            />
        </div>

        {/* Navigation link example */}
        <div className="mt-8 text-right">
            <Link to="/installation" className="text-blue-600 hover:underline" dir="rtl">
                برو به نصب و راه‌اندازی →
            </Link>
        </div>
    </div>
);

export default GettingStarted;
