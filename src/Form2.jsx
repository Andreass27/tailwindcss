
export default  function Form2(){
    return(
        <>
     
        <form className="  flex flex-col items-center p-10 gap-4 grid-cols-2 rounded-lg border border-solid-greey border-white/10">
            <h1 className="text-6xl mb-7">Login</h1>
            <input className="inline-flex items-center px-2 py-1 rounded border border-solid border-transparent duration-500 ease-linear transition-colors hover:border-green-400 focus:border-purple-500 shadow-none outline-none"  type="text" placeholder="Enter email:"></input>
            <input className=" inline-flex items-center px-2 py-1 rounded border border-solid border-transparent duration-500 ease-linear transition-colors hover:border-green-400 focus:border-purple-500 shadow-none outline-none"  type="text" placeholder="Enter Password:"></input>
            <button className=" mt-5 ">Submit</button>
        </form>
        
        
        </>
    )
}