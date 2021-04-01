import { useSpring, animated } from 'react-spring'
import React from 'react'
import propsAnimtion1 from '../../animtionPackages/Animation'

export default function DangKy() {
    const propsAnimtion1 = useSpring({
        opacity:1,
        from: {
            opacity:0
        },
        config: {
            duration:3000
        }
      })
    return (
        <animated.div style={propsAnimtion1}>
            Dang Ky
        </animated.div>
    )
}
