

export function Sun(){
    return(
        <mesh position={[4,12,0]}>
            <sphereGeometry args={[1]} />
            <meshBasicMaterial color={'yellow'}/>
            
        </mesh>
    )
}