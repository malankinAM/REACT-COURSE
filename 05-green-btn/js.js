const App = ({ initionalButtonText, initalClassesList})=> {
   
    // console.log('Called')
    const [buttonText, setButtonText] = React.useState(initionalButtonText)
    const [classeslist, setClassesList] = React.useState(initalClassesList)
    const onButtonClick = () => {
        setButtonText('Hello from React')
        setClassesList('green')
    }

    return (
        <div className="app">
            <button className={classeslist} onClick={onButtonClick}>{buttonText}</button>
        </div>
    )
}

    const container = document.getElementById('app')    
    const root = ReactDOM.createRoot(container)
    root.render(<App initionalButtonText="Click me " initalClassesList="" />)