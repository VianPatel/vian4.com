export default function PageTextContainer(props) {
  return (
    <div class="flex justify-center">
      <div class="flex flex-col w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 items-center p-4 border shadow-lg rounded-3xl bg-slate-200">
        {props.children}
      </div>
    </div>
  );
}