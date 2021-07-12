export interface Person {
    slug: string,
    image: {
        filename: string,
        path: string,
        media: number,
        url: string
    },
    name: string,
    description: string,
    department: string
}
