
export const storeArticle = (value:string)=>({
    type:"STORE_ARTICLE_CONTENT",
    payload:value
})

export const storeArticleTitle:any= (value:string)=>({
    type:"STORE_ARTICLE_TITLE",
    payload:value
})

export const storeArticleId = (value:string)=>({
    type:"STORE_ARTICLE_ID",
    payload:value
})

export const storeCategoryName =(value:string)=>({
    type:"STORE_CATEGORY_NAME",
    payload:value
})




