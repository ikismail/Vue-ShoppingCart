/* Handling Errors through Toastr */


import toastr from "toastr";

export const successToaster = (title, desc) => {
    return (toastr.success(desc, title))
}
export const errorToaster = (title, desc) => {
    return (toastr.error(desc, title))
}

export const warnToaster = (title, desc) => {
    return (toastr.warning(desc, title))
}

export const infoToaster = (title, desc) => {
    return (toastr.info(desc, title))
}