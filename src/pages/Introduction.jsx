import React from "react";
import CodeBlock from "../components/CodeBlock";
import fa from "../texts/fa";
import {faTextStyles} from "../style/twUtils.js";

const Introduction = () => {
    return (
        <div className="p-6 rtl">
            <h1 className={faTextStyles.mainTitle}>
                {fa.introduction.title}
            </h1>

            <p className={faTextStyles.description} dir="rtl">
                {fa.introduction.description}
            </p>

            <h2 className={faTextStyles.title}>
                {fa.introduction.sampleCodeTitle}
            </h2>

            <div className="ltr">
                <CodeBlock
                    code={`console.log("Redux Toolkit!");`}
                    language="javascript"
                />
            </div>
        </div>
    );
};

export default Introduction;
