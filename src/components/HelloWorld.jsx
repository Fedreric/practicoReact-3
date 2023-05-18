import { useState } from "react";

const HelloWorld = ({texto}) => {
    const [msj, setMsj] = useState('');
    return (
        <section>
            <h1>Hello {texto} {msj}!</h1>
            <button onClick={()=> setMsj('(from changed state)')}>Click me!</button>
        </section>
    );
};

export default HelloWorld;