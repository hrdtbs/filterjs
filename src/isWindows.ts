export const isWindows = () => {
    return (
        navigator.platform === "Win32" ||
        navigator.platform === "Win64" ||
        navigator.userAgent.indexOf("WOW64") != -1 ||
        navigator.userAgent.indexOf("Win64") != -1 ||
        navigator.appVersion.indexOf("Win") != -1
    )
}
