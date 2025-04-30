export const headerStyles = {
    container: "bg-blue-600 text-white p-4",
    inner: "flex items-center justify-between px-10 sm:px-10 lg:px-15",
    title: "text-2xl font-bold ",
};

export const sidebarStyles = {
    button: "absolute top-4 left-4 z-50 text-white bg-gray-800 p-2 rounded" +
        " hover:bg-gray-700 transition cursor-pointer",
    container: "bg-gray-800 text-white pt-16 min-h-screen h-full transition-all duration-300 ease-in-out overflow-y-auto",
    open: "w-64",
    closed: "w-0 overflow-hidden",
    toggleButton: "text-white mb-4",
    nav: "flex flex-col gap-2",
    link: "mb-2 hover:text-blue-400",
    linkActive: "mb-2 text-yellow-400 bg-gray-700 rounded p-2",
};

export const buttonStyles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded",
    secondary: "bg-gray-300 hover:bg-gray-400 text-black font-medium py-2 px-4 rounded",
};

export const typography = {
    heading: "text-3xl font-bold text-gray-900 mb-6",
    subheading: "text-xl font-semibold text-gray-700 mb-4",
    body: "text-base text-gray-600",
};

export const sectionStyles = {
    container: "p-4 sm:p-6 lg:p-8",
};

export const navLink = (isActive) => (
    isActive ? sidebarStyles.linkActive : sidebarStyles.link
);

//region Footer
export const footerStyles = {
    container: "bg-gray-900 text-white h-3 lg:h-10 py-6 mt-10 fixed bottom-0 w-full",
    inner: "container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4",
    copy: "text-sm text-gray-400",
    links: "flex gap-4 text-sm",
    link: "hover:text-blue-400 transition-colors",
    icons: "flex gap-3",
    iconLink: "hover:text-blue-400 transition-colors",
};

//endregion

export const faTextStyles = {

    mainTitle: "text-3xl font-bold text-gray-800 mb-4 text-right font-vazir",
    title: "text-1xl font-bold text-gray-800 mb-4 text-right font-vazir",
    description: "text-gray-600 mb-6 text-right leading-loose font-vazir",


}