import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize); //this is the useEffect clean up function/code
    }, [])

    return windowSize;
};

export default useWindowSize;