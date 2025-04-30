import React from "react";
import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import { faTextStyles } from "../style/twUtils";
import fa from "../texts/fa";

const RTKQuery = () => (
    <div className="p-6 rtl">
        {/*region Page Title */}
        <h1 className={faTextStyles.mainTitle} dir="rtl">
            {fa.rtkQuery.title}
        </h1>
        <p className={faTextStyles.description} dir="rtl">
            {fa.rtkQuery.description}
        </p>
        {/*endregion*/}

        {/*region Create API Service */}
        <h2 className={faTextStyles.title} dir="rtl">
            {fa.rtkQuery.createApiTitle}
        </h2>
        <p className={faTextStyles.description} dir="rtl">
            {fa.rtkQuery.createApiDescription}
        </p>
        <div className="ltr mb-6">
            <CodeBlock code={fa.rtkQuery.createApiCode} language="javascript" />
        </div>

        {/*region Explain createApi & builder */}
        <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2" dir="rtl">
            توضیح بخش‌های مختلف createApi
        </h3>
        <ul className="text-gray-600 text-right leading-loose list-disc pr-4" dir="rtl">
            <li><strong>createApi</strong>: تابع اصلی برای تعریف سرویس RTK Query است.</li>
            <li><strong>reducerPath</strong>: نام بخش state در Redux store است که داده‌ها در آن ذخیره می‌شوند.</li>
            <li><strong>baseQuery</strong>: تنظیمات مربوط به آدرس پایه (base URL) را مشخص می‌کند. اینجا از fetchBaseQuery استفاده شده است.</li>
            <li><strong>endpoints</strong>: در این قسمت همه endpointهای API تعریف می‌شوند. هر endpoint یک query یا mutation است.</li>
            <li><strong>builder.query</strong>: برای دریافت داده‌ها استفاده می‌شود (GET). در مقابل آن builder.mutation قرار دارد برای POST/PUT/DELETE.</li>
            <li><strong>useGetUsersQuery</strong>: این هوک به‌صورت خودکار ساخته می‌شود و برای فراخوانی اطلاعات کاربران به‌کار می‌رود.</li>
        </ul>
        {/*endregion*/}
        {/*endregion*/}

        {/*region Usage in Component */}
        <h2 className={faTextStyles.title} dir="rtl">
            {fa.rtkQuery.usageTitle}
        </h2>
        <p className={faTextStyles.description} dir="rtl">
            {fa.rtkQuery.usageDescription}
        </p>
        <div className="ltr mb-6">
            <CodeBlock code={fa.rtkQuery.usageCode} language="javascript" />
        </div>

        {/*region Explain useGetUsersQuery hook */}
        <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2" dir="rtl">
            توضیح هوک useGetUsersQuery
        </h3>
        <ul className="text-gray-600 text-right leading-loose list-disc pr-4" dir="rtl">
            <li><strong>isLoading</strong>: نشان می‌دهد که درخواست هنوز در حال اجراست.</li>
            <li><strong>error</strong>: اگر خطایی در دریافت اطلاعات رخ دهد، در این متغیر ذخیره می‌شود.</li>
            <li><strong>data</strong>: آرایه‌ای از کاربران که از API دریافت شده‌اند.</li>
            <li><strong>map</strong>: برای نمایش لیست کاربران با استفاده از JSX در داخل ul استفاده می‌شود.</li>
        </ul>
        {/*endregion*/}
        {/*endregion*/}

        {/*region Navigation */}
        <div className="mt-8 text-right" dir="rtl">
            <Link to="/best-practices" className="text-blue-600 hover:underline">
                {fa.rtkQuery.nextPageLink}
            </Link>
        </div>
        {/*endregion*/}
    </div>
);

export default RTKQuery;
