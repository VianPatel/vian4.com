export default function TextContainer(props) {
  // removed items-center
  return (
    <div class="flex flex-col w-full p-4 shadow-lg rounded-2xl bg-slate-200">
      {props.children}
    </div>
  );
}