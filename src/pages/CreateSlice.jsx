import React from "react";
import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import { faTextStyles } from "../style/twUtils";
import fa from "../texts/fa";

const CreateSlice = () => (
    <div className="p-6 rtl">
        {/* Page title */}
        <h1 className={faTextStyles.mainTitle} dir="rtl">
            {fa.createSlice.title}
        </h1>

        {/* Description */}
        <p className={faTextStyles.description} dir="rtl">
            {fa.createSlice.description}
        </p>

        {/* Section title: counterSlice.js */}
        <h2 className={faTextStyles.title} dir="rtl">
            {fa.createSlice.fileTitle}
        </h2>
        <p className={faTextStyles.description} dir="rtl">
            {fa.createSlice.fileDescription}
        </p>

        {/* Code block: createSlice */}
        <div className="ltr mb-6">
            <CodeBlock code={fa.createSlice.code.trim()} language="javascript" />
        </div>

        {/* Navigation link to next step */}
        <div className="mt-8 text-right" dir="rtl">
            <Link to="/create-async-thunk" className="text-blue-600 hover:underline">
                {fa.createSlice.nextPageLink}
            </Link>
        </div>
    </div>
);

export default CreateSlice;
