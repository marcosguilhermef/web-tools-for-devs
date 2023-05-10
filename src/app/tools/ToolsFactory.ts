export class ToolsFactory{

    public static factory( tool : ToolInterface, param: any = null){
        return tool.execute();
    }
}