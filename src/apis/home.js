//  获取轮播图请求
import httpInstance from '@/utils/http'

export function getBannerAPI() {
  return httpInstance({
    url: 'home/banner'
  })
}