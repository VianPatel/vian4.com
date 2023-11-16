export default function TextContainer(props) {
  return (
    <div class="flex flex-col w-full items-center p-4 shadow-lg rounded-2xl bg-slate-200">
      {props.children}
    </div>
  );
}