function PetInfo(props){
    const{animal, name, hasPet} = props
    
 
    return hasPet?(
        <h1> {`My name ${animal} I love ${name}hg`}</h1>
    ):(
    <h2>I like animal</h2>
    )   
}

export default PetInfo