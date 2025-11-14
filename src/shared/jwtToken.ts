import type { UserPart } from '@/shared/schema/user';
import jwt from 'jsonwebtoken'


export async function genJWT(payload: UserPart) {
    return jwt.sign(
        { ...payload },
        process.env.JWT_SECRET!,
        { expiresIn: '1h' }
    )
}

export function verifyJWT(token: string) {
    // const token = jwtToken.split(' ')[1]
    return new Promise((resolve, reject) => {
        jwt.verify(
            token,
            process.env.JWT_SECRET!,
            (error, decoded) => {
                if (error)
                    reject(error)
                resolve(decoded)
            }
        )
    })
}