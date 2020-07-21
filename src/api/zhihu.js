import axios from './axios'

function API_LATEST(){
  return axios.get('/news/latest')
}
function API_NEWS(id){
  return axios.get(`/news/${id}`)
}

export default {
  API_LATEST,
  API_NEWS
}