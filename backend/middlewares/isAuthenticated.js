import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {  // Include 'next' here
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ error: "User not authenticated", success: false });
        }
        const decode = await jwt.verify(token, process.env.SECRET_KEY);
        if (!decode) {
            return res.status(403).json({ error: "Invalid token", success: false });
        }
        req.id = decode.userId;
        next();  // Call 'next' to pass control to the next middleware or route handler
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error", success: false });
    }
}

export default isAuthenticated;
