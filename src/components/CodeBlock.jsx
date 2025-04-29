import React, { useState } from "react";
import { Copy } from "lucide-react";

const CodeBlock = ({ code, language = "javascript" }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // پیام فقط ۲ ثانیه بمونه
    };

    return (
        <div className="relative bg-gray-900 text-slate-500 font-mono p-4 rounded-lg overflow-x-auto
        my-4">
            {/* دکمه کپی */}
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 text-white hover:text-yellow-300 transition"
                title="کپی کد"
            >
                <Copy size={20} />
            </button>

            {/* پیام کپی شد */}
            {copied && (
                <span className="absolute top-2 right-10 text-sm text-yellow-400">
                    کپی شد
                </span>
            )}

            <pre className="whitespace-pre-wrap">
                <code className={`language-${language}`}>
                    {code}
                </code>
            </pre>
        </div>
    );
};

export default CodeBlock;
