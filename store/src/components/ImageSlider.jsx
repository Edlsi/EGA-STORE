import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import jegena2 from '@/assets/jegena2.png';
import cards from '@/assets/cards.jpg';
import pool from '@/assets/pool.png';

function ImageSlider() {
    const images = [
        { img: jegena2 },
        { img: cards },
        { img: pool },
        { img: jegena2 },
        { img: cards },
    ];

    const boxRef = useRef(null);
    const [dragWidth, setDragWidth] = useState(0);

    useEffect(() => {
        if (boxRef.current) {
            // Calculate the total width that can be dragged
            const totalWidth = boxRef.current.scrollWidth - boxRef.current.offsetWidth;
            setDragWidth(totalWidth);
        }
    }, []);

    return (
        <div
            className="relative h-64 p-2 border border-black flex w-3/4 mx-auto overflow-hidden"
            ref={boxRef}
        >
            <motion.div
                className="flex gap-4"
                drag="x"
                dragConstraints={{ right: 0, left: -dragWidth }} // Drag constraints to prevent excessive dragging
                initial={{ x: 0 }} // Start at the leftmost position
                whileTap={{ cursor: 'grabbing' }} // Change cursor when dragging
            >
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className="min-w-[300px] h-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${image.img})`,
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
}

export default ImageSlider;
