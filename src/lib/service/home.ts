import { request } from "@umijs/max"
import { requestDataWrap } from "../request"

export const getHomeBannerList = async (data: any) => {
    return request("/api/homepage/bannerlist", {
        method: 'post',
        requestType: 'form',
        data: requestDataWrap(data),
    });
}