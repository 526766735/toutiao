import { request } from './request'

export const initArticleList = function(_page, _limit) {
  return request({
    url: '/articles',
    params: {
      _page,
      _limit
    }
  })
}
