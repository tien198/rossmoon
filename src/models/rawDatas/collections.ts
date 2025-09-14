import { Collection } from "../collection.zod";

const collections: Collection[] = [
    {
        "name": "Phụ kiện làm đẹp",
        "slug": "/phu-kien-lam-dep",
        "imageUrl": "image-url",
        "category": {
            "_id": {
                "$oid": "68b8fc05fc5fc76d89529557"
            },
            "name": "woman"
        },
        "createdAt": {
            "$date": "2025-08-29T13:54:05.000Z"
        },
    },
    {
        "name": "Phấn mắt LV Ombers",
        "slug": "/phan-mat-lv-ombers",
        "imageUrl": "image-url",
        "category": {
            "_id": {
                "$oid": "68b8fc05fc5fc76d89529557"
            },
            "name": "woman"
        },
        "createdAt": {
            "$date": "2025-08-29T13:54:05.000Z"
        },
    },
    {
        "name": "Son dưỡng LV Baume",
        "slug": "/son-duong-lv-ombers",
        "imageUrl": "image-url",
        "category": {
            "_id": {
                "$oid": "68b8fc05fc5fc76d89529557"
            },
            "name": "woman"
        },
        "createdAt": {
            "$date": "2025-08-29T13:54:05.000Z"
        },
    },
    {
        "name": "Son môi LV Rouge",
        "slug": "/son-moi-lv-rouge",
        "imageUrl": "image-url",
        "category": {
            "_id": {
                "$oid": "68b8fc05fc5fc76d89529557"
            },
            "name": "woman"
        },
        "createdAt": {
            "$date": "2025-08-29T13:54:05.000Z"
        },
    }
]