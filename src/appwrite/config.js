import conf from '../conf/conf'
import { Client, ID, Databases, Storage, Query } from 'appwrite'

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteUrlProjectID);
    this.databases = new Databases(this.client);    
    this.bucket = new Storage(this.client);
    }

    async createPost(title, slug, content, featuredImage, status, userId){
        try {
            return await this.databases.createDocument(
                conf.appwriteUrlDataBaseID,
                conf.appwriteUrlCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite service:: createPost:: error", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.appwriteUrlDataBaseID,
            conf.appwriteUrlDataBaseID,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
            }
        } catch (error) {
            console.log("Appwrite service:: UpdatePost:: error", error);
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteUrlDataBaseID,
                conf.appwriteUrlCollectionID,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite service:: deletePost:: error", error);
            return false;
        }
    }

async getPost(slug){
    try {
        return await this.databases.getDocument(
            conf.appwriteUrlDataBaseID,
            conf.appwriteUrlCollectionID,
            slug,
        ) 
    } catch (error) {
        console.log("Appwrite service:: getPost:: error", error);
    }
}

async getPosts(queries = [Query.equal("status", "active")]){
    try {
        return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries,
            
        )
    } catch (error) {
        console.log("Appwrite serive :: getPosts :: error", error);
        return false
    }
}


// note: file upload methods

async uploadFile(file){
    try {
        return await this.bucket.createFile(
            conf.appwriteUrlBucketID,
            ID.unique(),
            file
        )
    } catch (error) {
        console.log("Appwrite service:: uploadFile:: error", error);
        return false;
    }
}

async deleteFile(fileId){
    try {
       return await this.bucket.deleteFile(
            conf.appwriteUrlBucketID,
            fileId
        )
    } catch (error) {
        console.log("Appwrite service:: deleteFile:: error", error);
        return false;
    }
}


getFilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appwriteUrlBucketID,
        fileId
    )
}



}





const service = new Service();

export default service
