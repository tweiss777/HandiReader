import StreamZip from 'node-stream-zip';

/*
    Function to open the zip file, read the document.xml file and return its contents.
*/
    function extractDocXml(path:string): Promise<string>{

        return new Promise(
            (resolve,reject) =>{
                // new StreamZip object.
        const zip = new StreamZip({
            file: path,
            storeEntries: true,
        });

        zip.on('ready', () => {
            var chunks: any[] = [];
            var content;
            zip.stream('word/document.xml', (error,stream) => {
                if(error){
                    reject(error)
                }
                stream?.on('data', (chunk) => {
                    chunks.push(chunk);
                })

                stream?.on('end', () => {
                    content = Buffer.concat(chunks);
                    const contentStr = content.toString();
                    resolve(contentStr);
                                    })

            }

        )
        
            })
            
        });
    }



/*
    Function to extraxt the text between xml tags and return the text as a string
*/
export function extractContent(path:string): Promise<string> {
    return new Promise(
        (resolve,reject) => {
            

            extractDocXml(path).then(
                
                // fix error here
                (res:string):void => {
                     
                    
                    // empty body
                    var body = '';
                    var components = res.split('<w:t');
                    
                    for(var i= 0;i<= components.length-1;i++){
                        var tags = components[i].split('>');
                        var content = tags[1].replace(/<.*$/,'');
                        body = body + content;
                        // console.log(body)
                    }
                    resolve(body);
                    
                }
            );
        }
    )
}

export function extractParagraphs(path:string): Promise<string> {
    return new Promise(
        (resolve,reject) => {
            
        }
    )
}
