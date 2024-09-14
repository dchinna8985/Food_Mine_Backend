"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const http_status_1 = require("../constants/http_status");
exports.default = (req, res, next) => {
    const token = req.headers.access_token;
    if (!token)
        return res.status(http_status_1.HTTP_UNAUTHORIZED).send();
    try {
        const decodeUser = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        req.user = decodeUser;
    }
    catch (error) {
        res.status(http_status_1.HTTP_UNAUTHORIZED).send();
    }
    return next();
};
//# sourceMappingURL=auth.mid.js.map