/*store*/
export function setToken(tokenName: string, tokenValue: string) {
    localStorage.setItem(tokenName, tokenValue);
}

/*delete*/
export function deleteToken(tokenName: string) {
    localStorage.removeItem(tokenName);
}

export function getToken(tokenName: string): string {
    let value = localStorage.getItem(tokenName);

    if (value === null) {
        return '';
    } else {
        return value;
    }
}