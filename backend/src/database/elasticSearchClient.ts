import {Client} from '@elastic/elasticsearch'

const elasticClient = new Client({
    node: 'http://10.0.0.115:9200',
});

export default elasticClient