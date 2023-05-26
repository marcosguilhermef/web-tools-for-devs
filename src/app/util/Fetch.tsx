export default class Fetch{
    private url: string;
    private data: Object | null = {};
    private method: number;
    private head?: Headers;
    public static readonly GET = 1; 
    public static readonly POST = 2; 

    constructor( url: string, data: Object | null = {}, method:number, head?: Headers ){
        this.url = url;
        this.data = data;
        this.method = method;
        this.head = head;
    }



    public async doFetch(){
        let rq = await fetch(
            this.url,
            {
                'method': this.whoIsMethod(),
                'body': this.method == Fetch.POST ? JSON.stringify(this.data) : null,
                'headers' : this.head
            }
        );
        

        if(rq.ok){
            let j = rq.json()
            return j
        }else{
            return null;
        }
    }

    public async doFetchGetResponse(){
        let rq = await fetch(
            this.url,
            {
                'method': this.whoIsMethod(),
                'body': this.method == Fetch.POST ? JSON.stringify(this.data) : null,
                'headers' : this.head
            }
        );
        
        return rq
        
    }

    private whoIsMethod(): string{
        switch(this.method){
            case (Fetch.GET):
                return 'GET';
            case (Fetch.POST):
                return 'POST';
            default:
                return 'GET';
        }
    }
}