import { Outlet, Link, useLocation } from "react-router-dom";


export default function App() {
  const location = useLocation().pathname;
  //<Link class="inline-block py-2 px-4 border-l border-t border-r rounded-t" to="/">Home</Link>
  //selected class is class="rounded-t-lg overflow-hidden border-t border-l border-r p-4"
  return (
    <>
      <nav class="pt-4 pl-4 pr-4 shadow-md shadow-cyan-600/30 absolute min-w-full bg-cyan-600">
        <ul class="flex">
          <li class="mr-6">
            <SelectorLink selectedLocation={location} to="/" class="text-white inline-block py-2 px-4" classSelected="text-white inline-block py-2 px-4 border-l border-t border-r rounded-t">Home</SelectorLink>
          </li>
          <li class="mr-6">
            <SelectorLink selectedLocation={location} to="/about" class="text-white inline-block py-2 px-4" classSelected="text-white inline-block py-2 px-4 border-l border-t border-r rounded-t">About</SelectorLink>
          </li>
          <li class="mr-6">
            <SelectorLink selectedLocation={location} to="/projects" class="text-white inline-block py-2 px-4" classSelected="text-white inline-block py-2 px-4 border-l border-t border-r rounded-t">Projects</SelectorLink>
          </li>
        </ul>
      </nav>


      {/*
      <div class="pt-4"></div>
      */}

      <div class="mt-12 p-4 flex-grow bg-blue-50">
        <Outlet />
      </div>

      
      <div class="p-4 bg-cyan-600">
        <p class="text-white">Footer</p>
      </div>

    </>
  );
}

function SelectorLink(props) {
  //the selected location is the current location
  return (<Link class={props.selectedLocation == props.to ? props.classSelected : props.class} to={props.to}>{props.children}</Link>);  
}