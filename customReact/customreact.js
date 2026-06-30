function customRender(reactElement,container){

//     const domElement=document.createElement(reactElement.type)
//     domElement.innerHTML=reactElement.children
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute('target',reactElement.props.target)
//     container.appendChild(domElement)

const domElement=document.createElement(reactElement.type)
domElement.innerHTML=reactElement.children
for(const propName in reactElement.props){
          if(propName==='children') continue;
 domElement.setAttribute(propName,reactElement.props[propName])
            
}
container.appendChild(domElement)
}
const reactElement={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank',
    },
    children:'Click for Google'
}
const mainContainer=document.getElementById('root')

customRender(reactElement,mainContainer)