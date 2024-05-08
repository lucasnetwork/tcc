import dotenv from 'dotenv'
import { Client } from '@elastic/elasticsearch'
dotenv.config()

const elasticClient = new Client({
  node: process.env.ELASTIC_SEARCH_URL
})

export default elasticClient
