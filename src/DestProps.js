import PropTypes from "prop-types";


// destructuration 
const DestProps = ({ nom, pre, age, dome }) => {
    return (
        <div>
            <h2>{nom}</h2>
            <h2>{pre}</h2>
            <h2 onClick={dome}>{age}</h2>
        </div>
    )
}

DestProps.defaultProps = {
    nom: '',
    pre: '',
    age: '0',
    dome: () => ''
}

DestProps.propTypes = {
    nom: PropTypes.string,
    pre: PropTypes.string,
    age: PropTypes.string,
    dome: PropTypes.func
};


// Component.propTypes = {
//     anyProp: PropTypes.any,
//     booleanProp: PropTypes.bool,
//     numberProp: PropTypes.number,
//     stringProp: PropTypes.string,
//     functionProp: PropTypes.func
// };



// const DestProps=(props)=>{
//     return (
//         <div>
//             <h2>{props.nom}</h2>
//             <h2>{props.pre}</h2>
//             <h2>{props.age}</h2>
//         </div>
//     )
// }


export default DestProps