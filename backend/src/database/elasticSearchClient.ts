import { Client } from '@elastic/elasticsearch'

const elasticClient = new Client({
  node: 'http://elasticsearch-1:9200'
})

export default elasticClient
