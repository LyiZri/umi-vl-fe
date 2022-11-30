import  {request}  from '@umijs/max';
import { requestDataWrap } from '../request';
export const getArticlesList = async (data: any) => {
  return request('/api/articles/list', {
    method: 'post',
    requestType: 'form',
    data: requestDataWrap(data),
  });
};
export const getArticleDetails = async (data:any) =>{
  return request("/api/articles/fetching", {
    method: 'post',
    requestType: 'form',
    data: requestDataWrap(data),
  });
}
