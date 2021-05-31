const fetchProfileData = async (professionalUrl) => {
    const domainName = "https://sandbox.protonn.com";
    const path = "/api/noauth/client/profile/all/professional-info";
    const query = `?professionalUrl=${professionalUrl}`;
    const res = await fetch(domainName + path + query);
    const data = res.json()
    return data;
}

export default fetchProfileData;