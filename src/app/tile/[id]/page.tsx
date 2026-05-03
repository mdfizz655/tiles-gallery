
"use client";



import { useParams, useRouter } from "next/navigation";




import tilesData from "../../../tiles.json"; 




import { authClient } from "@/lib/auth-client";




import { useEffect } from "react";










export default function TileDetails() {
    const params = useParams();




    const id = params.id; 


    const { data: session, isPending } = authClient.useSession();


    const router = useRouter();



    
    const tile = tilesData.find(tile => tile.id === id);



   
    useEffect(() => {
        if (!isPending && !session) {
            router.push("/login");


        }
    }, [session, isPending, router]);







    if (isPending) return <div className="text-center py-20">Loading...</div>;





    
    if (!tile) {
        return (
            <div className="text-center py-20">
               
               
                <h1 className="text-2xl font-bold text-red-500">Tile Not Found!</h1>
               
               
                <p>ID searched for: {id}</p>
                
                
           
           
              
              
                <button onClick={() => router.push("/")} className="btn btn-link">Back to Home</button>
           
           
            </div>
        );


    }





    return (
       
       
       <div className="container mx-auto px-4 py-16">
           
           
            <div className="flex flex-col lg:flex-row gap-12 bg-white p-8 rounded-3xl shadow-xl">
               
               
               
                <div className="lg:w-1/2">
                   
                   
                   
                    <img src={tile.image} alt={tile.title} className="w-full h-[450px] object-cover rounded-2xl" />
               
               
               
                </div>
               
               
               
               
               
                <div className="lg:w-1/2 space-y-6">
                  
                  
                  
                  
                    <h1 className="text-4xl font-bold">{tile.title}</h1>
                   
                   
                   
                   
                    <p className="text-slate-600">{tile.description}</p>
                  
                  
                  
                    <div className="p-4 bg-slate-100 rounded-xl">
                       
                       
                       
                        <p><strong>Material:</strong> {tile.material}</p>
                       
                       
                       
                        <p><strong>Dimensions:</strong> {tile.dimensions}</p>
                   
                   
                   
                    </div>
                    
                    
                    
                    <p className="text-3xl font-bold text-primary">${tile.price}</p>
                  
                  
                  
                    <button className="btn btn-primary w-full">Buy Now</button>
               
               
               
                </div>
            
            
            </div>
        
        
        
        </div>
    );
}