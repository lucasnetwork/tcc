import { IUseCase } from '../../useCases/IUseCase'
import {spawn} from "node:child_process"
import fs from "fs"
import path from "path"
import elasticClient from '../../database/elasticSearchClient'
class GetLogsToAnalisysController implements IUseCase{
    constructor(){}
    async handle(){
        const paths = fs.readdirSync(path.resolve(__dirname,"..","..","..","rules"))
        console.log(paths)
        const responses = paths.map(async(pathName) =>{
           const query = await this.getQuery(`/rules/${pathName}`)
           console.log("query",query)
           const response = await elasticClient.search({
               query:{
                   query_string:{
                       _name:"log",
                       query
                   }
               }
           })
           return response

       })
       const responsePromises = await Promise.all(responses)
       const responseFormated:{
        date:string
        program:string
        priority:string
        message:string
        isodate:string
        host:string
        facility:string
       }[] = []
       responsePromises.forEach(response =>{
            const values = response.hits.hits.map(hit =>({
                date:hit._source.date,
                program:hit._source.program,
                priority:hit._source.priority,
                message:hit._source.message,
                isodate:hit._source.isodate,
                host:hit._source.host,
                facility:hit._source.facility,
            }))
            responseFormated.push(...values)
       })
       return responseFormated
    }

    private async getQuery(path:string):Promise<string>{
        return new Promise((resolve,)=>{
            const response = spawn('sigma',["convert","-t","lucene","-p","ecs_zeek_beats",path.replace("/","")]);
            response.stdout.on('data', (data:Buffer) => {
                const file = data.toString()
                if(file.includes("Parsing Sigma rules")){
                    return
                }
              resolve(file)
            });

        })
    }
}

export default GetLogsToAnalisysController