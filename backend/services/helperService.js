const config = require('config');

function setTokenCookie(res, token) {
    // creating http only cookie with refresh token that expires in 7 days
    const cookieOptions = {
        httpOnly: true,
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    };
    res.cookie('refreshToken', token, cookieOptions);
}

function parseCookies(request) {
    var list = {},
        rc = request.headers.cookie;

    rc && rc.split(';').forEach(function (cookie) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    return list;
}

function basicDetails(user) {
    const { id, firstName, lastName, role, photo, email, mobile, status } = user;
    const completePath = photo ? `${config.assetsBaseUrl}/${photo}` : null
    return { id, firstName, lastName, role, photo: completePath, email, mobile, status };
}

function projectDetails(project) {
    const { id, name, location, model, coverImage } = project;
    const completePath = coverImage ? `${config.assetsBaseUrl}/${coverImage}` : null
    return { id, name, location, model, coverImage: completePath };
}

module.exports = {
    setTokenCookie,
    parseCookies,
    basicDetails,
    projectDetails
};