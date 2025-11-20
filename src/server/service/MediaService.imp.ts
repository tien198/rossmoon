import type { MediaServiceConstructor } from "./MediaService";

import { put } from '@vercel/blob'

export default class MediaServiceImp {
    /**
     * return pathName of the uploaded
     */
    async uploadFile(file: File) {
        const timeStamp = Date.now()
        const date = new Date(timeStamp)
        const dir = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate() + '/'

        const result = await put(
            dir + timeStamp + file.name,
            file,
            {
                access: 'public'
            }
        )
        return result.pathname
    }
}

export type MediaService = InstanceType<typeof MediaServiceImp>

MediaServiceImp satisfies MediaServiceConstructor