import jsonwebtoken from 'jsonwebtoken';
export const generateToken =async (userId: string) => {
    const { sign } = jsonwebtoken;
    const secretKey = process.env.JWT_SECRET_KEY;
    if (!secretKey) {
        throw new Error('jwt secret key not defined');
    }
    console.log("created token", sign({ userId }, secretKey, { expiresIn: '1h' }));

    return sign({ userId }, secretKey, { expiresIn: '1h' })
}