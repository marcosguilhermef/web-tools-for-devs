'use client'
import "@/app/Compoments/DivOp/style.css" 
import Image from "next/image";
export default function DivOpt({ name , url, desc, url_img }: { name:string , url:string, desc:string, url_img:string }){
    function redirect(){
        window.location.href = url;
    }
    return(
        <div className="divopt-root" onClick={() => redirect()}>
            <div className="divopt-img">
                <Image 
                    src={url_img} 
                    alt="tool"
                    width={50}
                    height={50}
                />
                <span>{ name }</span>
            </div>
            <div className="divopt-descript">
                <div>{ desc }</div>
            </div>
        </div>
    );
}