const withUpperCase=(WrappedComponent)=>{
    return function({text,...restProps}){
    const upperCaseText=text.toUpperCase();
    return <WrappedComponent {...restProps} text={upperCaseText}/>

    };
};
const MyComponent=({text})=><div>{text}</div>
const MyComponentWithUpperCase=withUpperCase(MyComponent)
export default MyComponentWithUpperCase


// withUpperCase componnet is a higherordercomponnt
//wrappedcomponnet is enhanced componnet.here wrappedcompnnte is enhahaned the withuppercase 