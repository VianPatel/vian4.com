import { Outlet, Link, useLocation } from "react-router-dom";


export default function App() {
  const location = useLocation().pathname;
  //<Link class="inline-block py-2 px-4 border-l border-t border-r rounded-t" to="/">Home</Link>
  //selected class is class="rounded-t-lg overflow-hidden border-t border-l border-r p-4"
  return (
    <>
      <nav class="px-4 py-2 flex justify-between shadow-md shadow-cyan-600/30 min-w-full bg-cyan-700">
        <div class="flex">
          <SelectorLink selectedLocation={location} to="/" class="text-white  px-4 py-1" classSelected="text-white inline-block px-4 py-1 border rounded">Home</SelectorLink>
          <SelectorLink selectedLocation={location} to="/about" class="text-white inline-block px-4 py-1" classSelected="text-white inline-block px-4 py-1 border rounded">About</SelectorLink>
          <SelectorLink selectedLocation={location} to="/projects" class="text-white inline-block px-4 py-1" classSelected="text-white inline-block px-4 py-1 border rounded">Projects</SelectorLink>
        </div>
        <p class="text-white px-4 py-1">vian4.com</p>
      </nav>

      <div class="flex-grow flex flex-col overflow-auto">
        <div class="p-4 flex-grow bg-slate-300">
          <Outlet />
        </div>

        <div class="p-4 bg-cyan-700">
          <p class="text-white">Footer</p>
        </div>
      </div>

    </>
  );
}

function SelectorLink(props) {
  //the selected location is the current location
  return (<Link class={props.selectedLocation == props.to ? props.classSelected : props.class} to={props.to}>{props.children}</Link>);
}