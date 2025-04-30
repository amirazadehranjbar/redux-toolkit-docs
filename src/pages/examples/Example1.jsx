import React from "react";
import { Link } from "react-router-dom";
import { faTextStyles } from "../../style/twUtils";
import CodeBlock from "../../components/CodeBlock";
import fa from "../../texts/fa";
import counterSliceCode from '../../codes/example1/counterSlice.js?raw';
import counterCode from '../../codes/example1/Counter.jsx?raw';


const Example1 = () => (
    <div className="p-6 rtl">
        {/*region Page Title */}
        <h1 className={faTextStyles.mainTitle} dir="rtl">
            {fa.realExamples.example1.title}
        </h1>
        {/*endregion*/}

        {/*region Project Structure */}
        <h2 className={faTextStyles.title} dir="rtl">
            {fa.realExamples.example1.structureTitle}
        </h2>
        <div className="ltr mb-6">
            <CodeBlock
                language="bash"
                code={
                    `src/
 ├── app/
 │   └── store.js
 ├── features/
 │   └── counter/
 │       ├── counterSlice.js
 │       └── Counter.jsx`
                }
            />
        </div>
        {/*endregion*/}

        {/*region Install Packages */}
        <h2 className={faTextStyles.title} dir="rtl">
            {fa.realExamples.example1.installTitle}
        </h2>
        <div className="ltr mb-6">
            <CodeBlock code={fa.realExamples.example1.installCommand} language="bash" />
        </div>
        {/*endregion*/}

        {/*region Slice Code */}
        <h2 className={faTextStyles.title} dir="rtl">
            {fa.realExamples.example1.sliceTitle}
        </h2>
        <div className="ltr mb-6">
            <CodeBlock code={counterSliceCode} language="javascript"/>
        </div>
        {/*endregion*/}

        {/*region UI Component */}
        <h2 className={faTextStyles.title} dir="rtl">
            {fa.realExamples.example1.uiTitle}
        </h2>
        <div className="ltr mb-6">
            <CodeBlock code={counterCode} language="javascript"/>
        </div>
        {/*endregion*/}

        {/*region Navigation */}
        <div className="mt-8 text-right" dir="rtl">
            <Link to="/examples/example2" className="text-blue-600 hover:underline">
                {fa.realExamples.example1.nextPageLink}
            </Link>
        </div>
        {/*endregion*/}
    </div>
);

export default Example1;
