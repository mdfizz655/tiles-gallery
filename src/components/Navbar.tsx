"use client";



  import Link from 'next/link';




    import { authClient } from "@/lib/auth-client";





  import { useRouter } from "next/navigation";







   const Navbar = () => {
    

    const { data: session } = authClient.useSession();
    const router = useRouter();










    


    const handleLogout = async () => {
        await authClient.signOut();
        router.refresh(); 



    };
    









    return (
        <div className="navbar bg-base-100 shadow-md px-4 lg:px-12 sticky top-0 z-50">
            





            <div className="navbar-start">
              
              
              
                <Link href="/" className="text-2xl font-bold text-primary">TileGallery</Link>
           
           
            </div>

            





            <div className="navbar-center hidden lg:flex">
                
                
                
                <ul className="menu menu-horizontal px-1 font-semibold">
                    
                    
                    <li><Link href="/">Home</Link></li>
                    
                    <li><Link href="/all-tiles">All Tiles</Link></li>
                 
                 
                    <li><Link href="/my-profile">My Profile</Link></li>
              
              
                </ul>
          
          
            </div>

            















            <div className="navbar-end gap-4">
                {session ? (
                    




                    <div className="flex items-center gap-3">
                        
                         
                         <div className="avatar">
                            
                            
                               <div className="w-10 rounded-full border-2 border-primary ring ring-primary ring-offset-base-100 ring-offset-2">
                               
                               
                                 <img 
                                    src={session.user.image || `https://ui-avatars.com/api/?name=${session.user.name}`} 
                                    alt="User Profile" 
                                />
                          
                          
                          
                            </div>
                       
                       
                       
                        </div>
                      
                      
                      
                      
                      
                        <button 
                            onClick={handleLogout} 
                            className="btn btn-outline btn-sm hover:bg-red-500 hover:border-red-500"
                        >
                            Logout
                       
                        </button>
                   
                   
                   
                   
                   
                    </div>
                ) : (
                    



                    <Link 
                        href="/login" 
                        className="btn btn-primary btn-sm md:btn-md px-8 uppercase"
                    >
                        Login
                    </Link>
                )}
          
          
          
            </div>
        </div>
    );
};





export default Navbar;