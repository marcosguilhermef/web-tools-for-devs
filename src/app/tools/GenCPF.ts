import ToolInterface from "@/app/tools/ToolInterface";

export class GenCPF implements ToolInterface<String>{

    parameter?: string;
    role: string = 'gerador'

    execute(){
        return this.genetate('xxxxxxxxxxx');
    };

    setParameters(param : string){
        this.parameter = param;
    };

    private genetate(mask:string, placeholder = 'x'){
        const rng = (x: number) => Math.round(Math.random() * x);
        const mod = (x: number, y:number) => Math.round(x - Math.floor(x / y) * y);
        const sumNumbers = (xs: number[]) => xs.slice().reverse().reduce((acc, a, b) => acc + a * (b + 2), 0);

        const numbers = [];

        while (numbers.length < 9) {
            numbers[numbers.length] = rng(9);
        }
    
        while (numbers.length < 11) {
            let last: number = 11 - mod(sumNumbers(numbers), 11);
    
            if (last > 9) {
                last = 0;
            }
    
            numbers[numbers.length] = last;
        }
    
        const result = numbers.join('');
    
        if (!mask) {
            return result;
        }
    
        let regex: any = mask.match(new RegExp(placeholder, 'g'))

        if(regex != null){
            if( regex.length < 11) {
                throw new Error('The CPF mask should contain 11 placeholders');
            }
    
        }
    
        const placeholderRegex = new RegExp(placeholder);
        for (let i = 0; i < 11; i++) {
            mask = mask.replace(placeholderRegex, result[i]);
        }
    
        return mask;
    

    }
    
}