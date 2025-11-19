import type { MediaServiceConstructor } from "./MediaService";

import { put } from '@vercel/blob'

export default class MediaServiceImp {
    /**
     * return pathName of the uploaded
     */
    async uploadFile(file: File) {
        const date = new Date(Date.now())
        const dir = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate() + '/'

        const result = await put(
            dir + file.name,
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