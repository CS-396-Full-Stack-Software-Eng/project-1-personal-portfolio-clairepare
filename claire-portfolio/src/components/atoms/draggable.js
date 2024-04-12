export default function Draggable({enabled, children}) {
    const [pos, setPos] = useState({x: 0, y: 0});
    // const [enable, setEnable] = useState(true);

    const handleMouseDown = () => {
        if (enabled){

        }
    }

    const handleMouseUp = () => {
        
    }

    return (
        <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
            {children}
        </div>
    )
}