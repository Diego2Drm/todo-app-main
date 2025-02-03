

function Form() {
  return (
    <section className="mt-8">
      <form>
        <label id="add" className="flex gap-2 items-center py-2 px-5  rounded-md bg-Very-Dark-Desaturated-Blue shadow-sm shadow-white">

          <div className="w-6 h-6 border-2 border-Very-Dark-Grayish-Blue2 rounded-full"></div>

          <input type="text" name="add" placeholder="Create a new todo..." className="p-1 w-full bg-transparent placeholder:text-Dark-Grayish-Blue placeholder:text-sm outline-none text-Light-Grayish-Blue font-josefin font-medium" />
        </label>
      </form>
    </section>
  );
};

export { Form };