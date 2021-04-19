import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import './Carousel2.css';
export default function Caousel2() {
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })
    return (
        <div className='lien-he-quan-cao-main'>
            <div id="root">
                <div onClick={() => set(state => !state)}>
                    <a.div className="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
                    <a.div classname="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
                </div>
            </div>
        </div>
    )
}
