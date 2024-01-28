import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import { ToastContainer, ToastContentProps, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Toastify = (message: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | ((props: ToastContentProps<unknown>) => ReactNode) | null | undefined) => {
  
    const notify = () => toast(message);

    return (
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );

}

export default Toastify