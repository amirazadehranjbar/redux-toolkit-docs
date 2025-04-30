import React from "react";
import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import { faTextStyles } from "../style/twUtils";
import fa from "../texts/fa";

const Installation = () => (
    <div className="p-6 rtl">
        {/* Page title */}
        <h1 className={faTextStyles.mainTitle} dir="rtl">
            {fa.installation.title}
        </h1>

        {/* Description */}
        <p className={faTextStyles.description} dir="rtl">
            {fa.installation.description}
        </p>

        {/* NPM Command */}
        <div className="ltr mb-4">
            <CodeBlock code={fa.installation.installCommandNpm} language="bash" />
        </div>

        {/* YARN Command */}
        <div className="ltr mb-6">
            <CodeBlock code={fa.installation.installCommandYarn} language="bash" />
        </div>

        {/* Folder structure */}
        <h2 className={faTextStyles.title} dir="rtl">
            {fa.installation.structureTitle}
        </h2>
        <p className={faTextStyles.description} dir="rtl">
            {fa.installation.structureDescription}
        </p>
        <div className="ltr mb-6">
            <CodeBlock code={fa.installation.folderStructure.trim()} language="bash" />
        </div>

        {/* React version note */}
        <h2 className={faTextStyles.title} dir="rtl">
            {fa.installation.reactNoteTitle}
        </h2>
        <p className={faTextStyles.description} dir="rtl">
            {fa.installation.reactNote}
        </p>

        {/* Official doc link */}
        <div className="mt-6 mb-10 text-right" dir="rtl">
            <a
                href="https://redux-toolkit.js.org"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noreferrer"
            >
                {fa.installation.docLink}
            </a>
        </div>

        {/* Navigation link */}
        <div className="mt-8 text-right" dir="rtl">
            <Link to="/store-setup" className="text-blue-600 hover:underline">
                {fa.installation.nextPageLink}
            </Link>
        </div>
    </div>
);

export default Installation;
