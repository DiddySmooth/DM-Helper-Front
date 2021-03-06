import CSS from 'csstype'

//Components
import GenContainer from '../../Widgets/Generators/GenContainer/GenContainer';

const GenPageStyles: CSS.Properties = {
    position: "absolute",
    top: "50px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
}

const Generators = () => {

    return(
        <div style={GenPageStyles}>
            <GenContainer />
            <GenContainer />
            <GenContainer />
            <GenContainer />
        </div>
    )
}
export default Generators