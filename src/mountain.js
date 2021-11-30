

export function Mountain(props){
    return(
        <mesh position={[props.posx,props.posy,0]}>
            <coneGeometry args={[props.x, props.y, 32]}/>
            <meshBasicMaterial color={'grey'} />
        </mesh>
    )
}