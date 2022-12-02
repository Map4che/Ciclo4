import back from './back';

class crud {
    async GET (resource, queryParams){


    }

    async POST (resource, body){

        const data = {
            method:'POST',
            body:JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const url = `${back.api.baseURL}${resource}`
        let response = (await (await fetch(url, data)).json())
        return response
    }
    

    async PUT (resource, queryParams){

        
    }

    async DELETE (resource, queryParams){

        
    }
}

export default new crud();