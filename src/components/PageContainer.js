export default function PageContainer(props) {
  return (
    <div class="flex justify-center">
      <div class="flex flex-col items-center w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12">
        {props.children}
      </div>
    </div>
  );
}