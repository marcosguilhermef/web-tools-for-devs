import ToolInterface from "@/app/tools/ToolInterface";

export class ToolsFactory<T>{

    public factory( tool : ToolInterface<T>, param: any = null){
        return tool.execute();
    }
}