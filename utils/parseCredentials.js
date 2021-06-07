const parseCredentials = (credentials) => {
    const user = credentials.user ? JSON.parse(credentials.user) : null;
    const token = credentials.token;
    return { user, token };
}

export default parseCredentials;