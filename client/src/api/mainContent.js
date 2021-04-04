import pageData from "./pageData";


export const getMainContent = async () => {
    const response = await pageData.get('/mytest');
    return response;
};
