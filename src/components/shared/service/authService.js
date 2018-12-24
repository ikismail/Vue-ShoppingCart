/* Encryption User based on base64 */
export const encryptUser = (user) => {
    const objStr = JSON.stringify(user);
    const encryptedValue = new Buffer(objStr).toString("base64");
    return encryptedValue;
}

/* Decrypting User based on base64*/
export const decryptUser = () => {
    const data = localStorage.getItem("_auth");
    if (!data) {
        return null;
    }
    const strObj = new Buffer(data || "", "base64").toString("utf8");
    const value = JSON.parse(strObj);
    return value;
}

/* Verify that person is loggedIn */
export const isLoggedIn = () => {
    const data = decryptUser();
    if (data) {
        return true;
    }
    return false;
}

/* Verifying that the user is Admin or not */
export const isAdmin = () => {
    const data = decryptUser();
    let hasAdmin = false;
    if (data["isAdmin"]) {
        hasAdmin = true;
    }
    return hasAdmin;
}

/* Returning the logged User */
export const getLoggedInUser = () => {
    const data = decryptUser();
    return data;
}