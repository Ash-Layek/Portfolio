const Form = () => {



    const zaml = () => {

        console.log("zaml");
    }
 
    return(
        <div className="flex justify-center items-end lg:items-center h-1/2 mt-8">
<div class=" md:w-1/3 w-full  rounded-lg p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-purple-800 ">
  <form name="contact" method="post">
    
    <input type="hidden" name="form-name" value="contact" />
    
    <div class="relative mb-6" data-te-input-wrapper-init>
    
    <label for="name" className="flex justify-start" >  Name  </label>
      <input
        type="text"
        class=" mt-2 peer block min-h-[auto] w-full rounded bg-slate-50 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleInput7"
        name="name"
         />
     
    </div>

    <div class="relative mb-6" data-te-input-wrapper-init>
    
    <label for="email" className="flex justify-start" >  Email  </label>
      <input
        type="text"
        class=" mt-2 peer block min-h-[auto] w-full rounded bg-slate-50 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleInput7"
        name="email"
         />
     
    </div>


    <div class="relative mb-6" data-te-input-wrapper-init>
    
    <label for="number" className="flex justify-start" >  Phone Number   </label>
      <input
        type="tel"
        class="mt-2 peer block min-h-[auto] w-full rounded bg-slate-50 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear  focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleInput7"
        name="number"
         />
     
    </div>

    
    <div class="" data-te-input-wrapper-init>
    
    <label for="message" className="flex justify-start" name="form-message">  Message   </label>
      
      <textarea className=" resize rounded-md h-40 w-full mt-2 " name="message"></textarea>
     
    </div>

    
    <input

      type="submit" 
      class=" hover:bg-blue-500 mt-5 dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium bg-purple-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      data-te-ripple-init
      data-te-ripple-color="light" onClick={zaml}
      
    />
  </form>
</div>
</div>

    )
};

export default Form;