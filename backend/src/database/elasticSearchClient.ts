import { Client } from '@elastic/elasticsearch'

const elasticClient = new Client({
  node: 'http://tcc_elasticsearch_1:9200'
})

export default elasticClient
