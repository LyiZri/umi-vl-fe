import { history } from "@umijs/max";

/**
 * @desc 将长字符串转为短字符串，超出部分显示为...
 * @param {*} str 待处理字符串
 * @param length 需保留的长度 默认为10
 * @return 返回处理后的字符串
 * @author cas@nextme.one
 */
export const getShortenStr = (str="", length = 10): string => {
    if (typeof str !== 'string') return str
    if (str.length < length) return str
    return str.slice(0, length) + '...'
}


export function timestampToTime(data=0) {
    if (!data) return;
    let num = data.toString().length === 10 ? Number(data) * 1000 : data;
    let date = new Date(num);
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = date.getDate() + ' ';
    // let h = date.getHours() + ':';
    // let m = date.getMinutes() + ':';
    // let s = date.getSeconds();
    return Y + M + D;
}

export const HTMLDecode = (text="") =>{
  if(!text){
    return ""
  }
  if(typeof text !== "string"){
    return String(text)
  }
  let temp = document.createElement("div")
  temp.innerHTML = text
  const output = temp.textContent || temp.innerText
return output
}

export const pushToAtid = (atid="") =>{
  history.push({ pathname: `/articles/${atid}` }, { query: { atid } })
}