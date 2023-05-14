export default class Fetch{
    private url: string;
    private data: Object = {};
    private method: number;
    public static readonly GET = 1; 
    public static readonly POST = 2; 

    constructor( url: string, data: Object = {}, method:number ){
        this.url = url;
        this.data = data;
        this.method = method;
    }


    public async doFetch(){
        let rq = await fetch(
            this.url,
            {
                'method': this.whoIsMethod(),
                'body': this.method == Fetch.POST ? JSON.stringify(this.data) : null
            }
        );


        if(rq.ok){
            return rq.json()
        }else{
            return null;
        }
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