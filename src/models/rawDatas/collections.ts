import { Collection } from "../collection.zod";

const collections: Collection[] = [
    {
        "name": "la-beaute-louis-vuitton",
        "slug": "/la-beaute-louis-vuitton",
        "imageUrl": "/images/la-beaute-louis-vuitton/Masthead_BEAUTY_BEAUTYCAMPAIGN_MODELS_IMG06_LVCOM_1920x1080_ANIMATION.jpg",
        "category": {
            "_id": {
                "$oid": "68c6de93f718c65b756b140b"
            },
            "name": "woman"
        },
        "subCollections": [],
        "createdAt": {
            "$date": "2025-08-29T13:54:05.000Z"
        },
    },
    {
        "name": "the last",
        "slug": "/the-last",
        "category": {
            "_id": {
                "$oid": "68c6de93f718c65b756b140b"
            },
            "name": "woman"
        },
        "subCollections": [],
        "createdAt": {
            "$date": "2025-08-29T13:54:05.000Z"
        },
    },
    
    {
        "name": "Phấn mắt LV Ombers",
        "slug": "/phan-mat-lv-ombers",
        "imageUrl": "/images/la-beaute-louis-vuitton/ombres/Beauty_banner.webp",
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
                "$oid": "68c6de93f718c65b756b140b"
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
                "$oid": "68c6de93f718c65b756b140b"
            },
            "name": "woman"
        },
        "createdAt": {
            "$date": "2025-08-29T13:54:05.000Z"
        },
    }
]