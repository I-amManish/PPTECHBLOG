const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteUrlProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteUrlDataBaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteUrlCollectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteUrlBucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}



export default conf