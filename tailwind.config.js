// eslint-disable-next-line no-undef
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                vazir: ['Vazirmatn', 'sans-serif'],
            }
        },
    },
    plugins: [],
    // اضافه کردن حالت RTL
    corePlugins: {
        preflight: false, // اگر خواستی خودت reset CSS بده
    },
    variants: {
        extend: {},
    },
}
