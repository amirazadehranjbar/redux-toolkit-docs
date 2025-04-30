
const fa = {
    introduction: {
        title: "مقدمه",
        description: "در این مستندات، به صورت کامل نحوه استفاده از Redux Toolkit را آموزش می‌دهیم. از ساخت استور گرفته تا استفاده از RTK Query و مدیریت درخواست‌های Async.",
        sampleCodeTitle: "نمونه کد ساده",
    },
    gettingStarted: {
        title: "شروع کار",
        installation: "برای نصب Redux Toolkit از دستور زیر استفاده کنید:",
        installCommand: "npm install @reduxjs/toolkit react-redux",
        usageTitle: "نحوه استفاده اولیه",
        usageDescription: "پس از نصب، می‌توانید یک store ساده به صورت زیر بسازید:",
    },
    installation: {
        title: "نصب و راه‌اندازی",
        description: "برای نصب Redux Toolkit و React Redux، از یکی از دستورهای زیر استفاده کنید:",
        installCommandNpm: "npm install @reduxjs/toolkit react-redux",
        installCommandYarn: "yarn add @reduxjs/toolkit react-redux",
        structureTitle: "ساختار پیشنهادی پروژه",
        structureDescription: "برای پروژه‌هایی که از Redux Toolkit استفاده می‌کنند، معمولاً ساختار زیر توصیه می‌شود:",
        folderStructure: `
src/
 ├── app/
 │   └── store.js
 ├── features/
 │   └── counter/
 │       ├── counterSlice.js
 │       └── Counter.jsx
 └── index.js
  `,
        reactNoteTitle: "نکته درباره نسخه‌ی React",
        reactNote: "مطمئن شوید که پروژه‌ی شما از React 16.8 یا بالاتر استفاده می‌کند. Redux Toolkit و react-redux فقط در نسخه‌هایی که از هوک‌ها پشتیبانی می‌کنند به درستی کار می‌کنند.",
        docLink: "مستندات رسمی Redux Toolkit →",
        nextPageLink: "برو به ساخت Store →"
    },
    storeSetup: {
        title: "راه‌اندازی Store",
        createStoreTitle: "ساخت فایل store.js",
        createStoreDescription: "ابتدا یک فایل به نام store.js در پوشه app یا src ایجاد کرده و کد زیر را داخل آن قرار دهید:",
        storeCode:
            "import { configureStore } from '@reduxjs/toolkit';\n\n" +
            "// later we will add slices here\n" +
            "const store = configureStore({\n" +
            "  reducer: {}\n" +
            "});\n\n" +
            "export default store;",

        providerTitle: "اضافه کردن Provider",
        providerDescription: "برای در دسترس قرار دادن Store به کل برنامه، Provider را در فایل index.js اضافه می‌کنیم:",
        providerCode:
            "import React from 'react';\n" +
            "import ReactDOM from 'react-dom/client';\n" +
            "import App from './App';\n" +
            "import { Provider } from 'react-redux';\n" +
            "import store from './app/store';\n\n" +
            "ReactDOM.createRoot(document.getElementById('root')).render(\n" +
            "  <Provider store={store}>\n" +
            "    <App />\n" +
            "  </Provider>\n" +
            ");",

        nextPageLink: "برو به ساخت Slice →"
    },
    createSlice: {
        title: "ساخت Slice",
        description: "در این بخش یک Slice ساده برای شمارنده (Counter) ایجاد می‌کنیم.",
        fileTitle: "فایل counterSlice.js",
        fileDescription: "فایل زیر را در مسیر features/counter/counterSlice.js بسازید:",
        code: `
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1 },
    decrement: state => { state.value -= 1 },
    reset:     state => { state.value = 0 }
  }
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
  `,
        nextPageLink: "برو به Async Thunk →"
    },
    createAsyncThunk: {
        title: "ساخت Async Thunk",
        description: "در این مرحله یاد می‌گیریم چگونه با استفاده از createAsyncThunk داده‌ها را از API دریافت و مدیریت کنیم.",

        asyncThunkTitle: "ساخت thunk برای دریافت کاربران",
        asyncThunkDescription: "ابتدا یک thunk با استفاده از createAsyncThunk می‌سازیم:",
        asyncThunkCode:
            "import { createAsyncThunk } from '@reduxjs/toolkit';\n\n" +
            "export const fetchUsers = createAsyncThunk(\n" +
            "  'users/fetchUsers',\n" +
            "  async () => {\n" +
            "    const response = await fetch('https://jsonplaceholder.typicode.com/users');\n" +
            "    return await response.json();\n" +
            "  }\n" +
            ");",

        sliceTitle: "استفاده از thunk در Slice",
        sliceDescription: "سپس آن را درون یک slice استفاده می‌کنیم تا وضعیت loading و داده‌ها را مدیریت کنیم:",
        sliceCode:
            "import { createSlice } from '@reduxjs/toolkit';\n" +
            "import { fetchUsers } from './userThunk';\n\n" +
            "const userSlice = createSlice({\n" +
            "  name: 'users',\n" +
            "  initialState: {\n" +
            "    list: [],\n" +
            "    loading: false,\n" +
            "    error: null\n" +
            "  },\n" +
            "  extraReducers: (builder) => {\n" +
            "    builder\n" +
            "      .addCase(fetchUsers.pending, (state) => {\n" +
            "        state.loading = true;\n" +
            "      })\n" +
            "      .addCase(fetchUsers.fulfilled, (state, action) => {\n" +
            "        state.loading = false;\n" +
            "        state.list = action.payload;\n" +
            "      })\n" +
            "      .addCase(fetchUsers.rejected, (state, action) => {\n" +
            "        state.loading = false;\n" +
            "        state.error = action.error.message;\n" +
            "      });\n" +
            "  }\n" +
            "});\n\n" +
            "export default userSlice.reducer;",

        nextPageLink: "برو به RTK Query →"
    },
    rtkQuery: {
        title: "RTK Query",
        description: "RTK Query یکی از قابلیت‌های قدرتمند Redux Toolkit است که مدیریت داده و cache را به ساده‌ترین شکل ممکن انجام می‌دهد.",

        createApiTitle: "ساخت فایل apiService.js",
        createApiDescription: "برای شروع، یک فایل جدید به نام apiService.js ساخته و کد زیر را در آن قرار دهید:",
        createApiCode:
            "import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';\n\n" +
            "export const api = createApi({\n" +
            "  reducerPath: 'api',\n" +
            "  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),\n" +
            "  endpoints: (builder) => ({\n" +
            "    getUsers: builder.query({\n" +
            "      query: () => 'users'\n" +
            "    })\n" +
            "  })\n" +
            "});\n\n" +
            "export const { useGetUsersQuery } = api;",

        usageTitle: "استفاده در کامپوننت",
        usageDescription: "حالا می‌تونید خیلی راحت با هوک آماده‌شده از اطلاعات استفاده کنید:",
        usageCode:
            "import React from 'react';\n" +
            "import { useGetUsersQuery } from '../services/apiService';\n\n" +
            "const UserList = () => {\n" +
            "  const { data, error, isLoading } = useGetUsersQuery();\n\n" +
            "  if (isLoading) return <p>در حال دریافت...</p>;\n" +
            "  if (error) return <p>خطا در دریافت اطلاعات</p>;\n\n" +
            "  return (\n" +
            "    <ul>\n" +
            "      {data.map(user => (\n" +
            "        <li key={user.id}>{user.name}</li>\n" +
            "      ))}\n" +
            "    </ul>\n" +
            "  );\n" +
            "};\n\n" +
            "export default UserList;",

        nextPageLink: "برو به نکات حرفه‌ای →"
    },
    bestPractices: {
        title: "نکات حرفه‌ای",
        description: "در این بخش، نکات مهمی برای استفاده‌ی بهتر و حرفه‌ای‌تر از Redux Toolkit آورده شده است.",

        tips: [
            "Slices را بر اساس feature جدا نگه دارید، نه بر اساس نوع عملیات (مثلاً authSlice، cartSlice نه actionSlice).",
            "از createAsyncThunk فقط برای عملیات async پیچیده استفاده کنید — برای عملیات ساده از useEffect + dispatch استفاده کنید.",
            "از combineReducers استفاده نکن، فقط همون reducer object رو در configureStore بده.",
            "RTK Query را برای data-fetching جایگزین createAsyncThunk کن تا ساده‌تر و سریع‌تر بشه.",
            "همیشه از useSelector و useDispatch به‌صورت type-safe استفاده کن (اگر با TypeScript کار می‌کنی).",
            "مقداردهی اولیه state‌ها رو داخل Slice انجام بده، نه داخل کامپوننت‌ها.",
            "از DevTools در محیط توسعه استفاده کن و در production خاموشش کن.",
            "ساختار فولدرها رو طوری بچین که features/ به‌راحتی جدا بشن (مثل micro-modules)."
        ],

        nextPageLink: "پایان مستندات 🎉"
    },
    realExamples: {
        title: "مثال‌های واقعی",
        example1: {
            title: "مثال ۱: شمارنده ساده",
            structureTitle: "ساختار پروژه",
            installTitle: "نصب پکیج‌ها",
            installCommand: "npm install @reduxjs/toolkit react-redux",
            sliceTitle: "ساخت counterSlice",
            uiTitle: "کامپوننت شمارنده (Counter.jsx)",
            nextPageLink: "برو به مثال ۲ →"
        },
        example2: {
            title: "مثال ۲: Todo List ساده",
            structureTitle: "ساختار پروژه",
            installTitle: "نصب پکیج‌ها",
            installCommand: "npm install @reduxjs/toolkit react-redux",
            sliceTitle: "ساخت todoSlice",
            uiTitle: "کامپوننت لیست کارها (TodoList.jsx)",
            nextPageLink: "برو به مثال ۳ →"
        }
    }




};

export default fa;
