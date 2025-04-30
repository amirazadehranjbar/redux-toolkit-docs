import React from "react";
import { Link } from "react-router-dom";
import { faTextStyles } from "../../style/twUtils";
import CodeBlock from "../../components/CodeBlock";
import fa from "../../texts/fa";
import todoSliceCode from '../../codes/example2/todoSlice.js?raw';
import todoListCode from '../../codes/example2/TodoList.jsx?raw';


const Example2 = () => (
    <div className="p-6 rtl">
        {/*region Page Title */}
        <h1 className={faTextStyles.mainTitle} dir="rtl">
            {fa.realExamples.example2.title}
        </h1>
        {/*endregion*/}

        {/*region Project Structure */}
        <h2 className={faTextStyles.title} dir="rtl">
            {fa.realExamples.example2.structureTitle}
        </h2>
        <div className="ltr mb-6">
            <CodeBlock
                language="bash"
                code={
                    `src/
 ├── app/
 │   └── store.js
 ├── features/
 │   └── todo/
 │       ├── todoSlice.js
 │       └── TodoList.jsx`
                }
            />
        </div>
        {/*endregion*/}

        {/*region Install Packages */}
        <h2 className={faTextStyles.title} dir="rtl">
            {fa.realExamples.example2.installTitle}
        </h2>
        <div className="ltr mb-6">
            <CodeBlock code={fa.realExamples.example2.installCommand} language="bash" />
        </div>
        {/*endregion*/}

        {/*region Slice Code */}
        <h2 className={faTextStyles.title} dir="rtl">
            {fa.realExamples.example2.sliceTitle}
        </h2>
        <div className="ltr mb-6">
            <CodeBlock language="javascript" code={todoSliceCode} />
        </div>
        {/*endregion*/}

        {/*region UI Component */}
        <h2 className={faTextStyles.title} dir="rtl">
            {fa.realExamples.example2.uiTitle}
        </h2>
        <div className="ltr mb-6">
            <CodeBlock language="javascript" code={todoListCode} />
        </div>
        {/*endregion*/}

        {/*region Navigation */}
        <div className="mt-8 text-right" dir="rtl">
            <Link to="/examples/example3" className="text-blue-600 hover:underline">
                {fa.realExamples.example2.nextPageLink}
            </Link>
        </div>
        {/*endregion*/}
    </div>
);

export default Example2;
