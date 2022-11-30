import { request } from "@umijs/max"
import { requestDataWrap } from "../request"

export const getGameDetails = async (data: any) => {
    return request("/api/gamelistings/list", {
        method: 'post',
        requestType: 'form',
        data: requestDataWrap(data),
    });
}