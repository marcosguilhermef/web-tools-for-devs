'use client'
import "@/app/Compoments/DivOp/style.css" 
export default function DivOpt({ name , url, desc, url_img }: { name:string , url:string, desc:string, url_img:string }){
    function redirect(){
        window.location.href = url;
    }
    return(
        <div className="divopt-root" onClick={() => redirect()}>
            <div className="divopt-img">
                <img src={url_img}/>
                <span>{ name }</span>
            </div>
            <div className="divopt-descript">
                <div>{ desc }</div>
            </div>
        </div>
    );
}