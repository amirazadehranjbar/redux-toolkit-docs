import React from "react";
import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import { faTextStyles } from "../style/twUtils";
import fa from "../texts/fa";

const StoreSetup = () => (
    <div className="p-6 rtl">
        {/* Page Title */}
        <h1 className={faTextStyles.mainTitle} dir="rtl">
            {fa.storeSetup.title}
        </h1>

        {/* Section: Create store.js */}
        <h2 className={faTextStyles.title} dir="rtl">
            {fa.storeSetup.createStoreTitle}
        </h2>
        <p className={faTextStyles.description} dir="rtl">
            {fa.storeSetup.createStoreDescription}
        </p>
        <div className="ltr mb-6">
            <CodeBlock code={fa.storeSetup.storeCode} language="javascript" />
        </div>

        {/* Section: Add Provider */}
        <h2 className={faTextStyles.title} dir="rtl">
            {fa.storeSetup.providerTitle}
        </h2>
        <p className={faTextStyles.description} dir="rtl">
            {fa.storeSetup.providerDescription}
        </p>
        <div className="ltr mb-6">
            <CodeBlock code={fa.storeSetup.providerCode} language="javascript" />
        </div>

        {/* Navigation to next page */}
        <div className="mt-8 text-right" dir="rtl">
            <Link to="/create-slice" className="text-blue-600 hover:underline">
                {fa.storeSetup.nextPageLink}
            </Link>
        </div>
    </div>
);

export default StoreSetup;
