export interface MediaServiceConstructor {
    new(): MediaServiceInstance
}

export interface MediaServiceInstance {
    // return pathName of the uploaded
    uploadFile: (file: File) => Promise<string>
}