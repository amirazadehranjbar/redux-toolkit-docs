import React from "react";
import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import { faTextStyles } from "../style/twUtils";
import fa from "../texts/fa";

const CreateAsyncThunk = () => (
    <div className="p-6 rtl">
        {/* Title */}
        <h1 className={faTextStyles.mainTitle} dir="rtl">
            {fa.createAsyncThunk.title}
        </h1>

        {/* Description */}
        <p className={faTextStyles.description} dir="rtl">
            {fa.createAsyncThunk.description}
        </p>

        {/* Async thunk */}
        <h2 className={faTextStyles.title} dir="rtl">
            {fa.createAsyncThunk.asyncThunkTitle}
        </h2>
        <p className={faTextStyles.description} dir="rtl">
            {fa.createAsyncThunk.asyncThunkDescription}
        </p>
        <div className="ltr mb-6">
            <CodeBlock code={fa.createAsyncThunk.asyncThunkCode} language="javascript" />
        </div>

        {/*region Describe createAsyncThunk function parameters*/}
        <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2" dir="rtl">
            توضیح پارامترهای createAsyncThunk
        </h3>

        <ul className="text-gray-600 text-right leading-loose list-disc pr-4" dir="rtl">
            <li><strong>'users/fetchUsers'</strong>: یک prefix برای action type‌ها است. در Redux DevTools و لاگ‌ها نمایش داده می‌شود (مثل <code>users/fetchUsers/pending</code>).</li>
            <li><strong>تابع async</strong>: تابعی که درخواست API را ارسال می‌کند. خروجی آن مستقیماً به action <code>fulfilled</code> ارسال می‌شود.</li>
            <li><strong>چه زمانی از createAsyncThunk استفاده کنیم؟</strong>: وقتی می‌خواهید یک فراخوانی async (مثلاً fetch یا axios) انجام دهید و وضعیت loading / error / data را با Redux مدیریت کنید.</li>
        </ul>
        {/*endregion*/}

        {/*region Slice integration */}
        <h2 className={faTextStyles.title} dir="rtl">
            {fa.createAsyncThunk.sliceTitle}
        </h2>
        <p className={faTextStyles.description} dir="rtl">
            {fa.createAsyncThunk.sliceDescription}
        </p>
        <div className="ltr mb-6">
            <CodeBlock code={fa.createAsyncThunk.sliceCode} language="javascript" />
        </div>
        {/*endregion*/}

        {/*region Describe extraReducers with builder */}
        <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2" dir="rtl">
            توضیح extraReducers و استفاده از builder
        </h3>

        <ul className="text-gray-600 text-right leading-loose list-disc pr-4" dir="rtl">
            <li>
                <strong>extraReducers</strong>: این بخش زمانی استفاده می‌شود که می‌خواهید رفتارهای Slice را به actionهایی که خارج از خود Slice تعریف شده‌اند (مثل <code>createAsyncThunk</code>) متصل کنید.
            </li>
            <li>
                <strong>builder</strong>: این آبجکت متدهایی مانند <code>addCase</code> دارد که به شما امکان می‌دهد برای هر حالت از lifecycle یک thunk (مثل pending، fulfilled و rejected) reducer تعریف کنید.
            </li>
            <li>
                <strong>fetchUsers.pending</strong>: زمانی اجرا می‌شود که درخواست در حال ارسال است. معمولاً در اینجا <code>loading = true</code> تنظیم می‌شود.
            </li>
            <li>
                <strong>fetchUsers.fulfilled</strong>: زمانی که درخواست موفق باشد و داده از سرور برگردد. در اینجا داده‌ها را در state ذخیره می‌کنیم.
            </li>
            <li>
                <strong>fetchUsers.rejected</strong>: اگر درخواست با خطا مواجه شود، این بخش اجرا می‌شود و پیام خطا در state ذخیره می‌شود.
            </li>
        </ul>
        {/*endregion */}


        {/* Navigation to next page */}
        <div className="mt-8 text-right" dir="rtl">
            <Link to="/rtk-query" className="text-blue-600 hover:underline">
                {fa.createAsyncThunk.nextPageLink}
            </Link>
        </div>
    </div>
);

export default CreateAsyncThunk;
