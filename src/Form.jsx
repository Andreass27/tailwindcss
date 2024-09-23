export default function Form() {
    return (
        <div className="container">
    <header className=" flex items-center justify-between w-98">
        <div className="hover:text-green-500 transition-colors duration-200 ease-in-out cursor-pointer m-10 bg-green-300/5 px-5 py-2 shadow shadow-green-500">logo</div>
        <ul className="flex items-center gap-10">
            <li>первый</li>
            <li>Это второй</li>
            <li>третий</li>
        </ul>
        <button className="animate-pulse m-10">Contacts</button>
        </header>
        <section className="grid grid-cols-3 gap-10 m-10">
          <div className="rotate-12">IMG</div>
          <div className="rotate-45">IMG</div> 
          <div className=" blur-sm">IMG</div> 
          <div className="brightness-0">IMG</div>   
          <div className="invert-0">IMG</div> 
          <div>IMG</div> 
          <div>IMG</div> 
          <div>IMG</div> 
          <div>IMG</div> 
        </section>
        </div>
    )
}