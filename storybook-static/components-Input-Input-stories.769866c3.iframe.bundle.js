"use strict";(self.webpackChunkliberizky=self.webpackChunkliberizky||[]).push([[195],{"./src/components/Input/Input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Disabled:()=>Disabled,Error:()=>Error,Primary:()=>Primary,Success:()=>Success,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Input_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const StyledInput=styled_components_browser_esm.ZP.input`
  height: 40px;
  width: 300px;
  border-radius: 3px;
  border: solid 2px
    ${props=>props.disabled?"#e4e3ea":props.error?"#a9150b":props.success?"#067d68":"#353637"};
  background-color: #fff;
  &:focus {
    border: solid 2px #1b116e;
  }
`,StyledLabel=styled_components_browser_esm.ZP.div`
  font-size: 14px;
  color: ${props=>props.disabled?"#e4e3ea":"#080808"};
  padding-bottom: 6px;
`,StyledMessage=styled_components_browser_esm.ZP.div`
  font-size: 14px;
  color: #a9150b8;
  padding-top: 4px;
`,StyledText=styled_components_browser_esm.ZP.p`
  margin: 0px;
  color: ${props=>props.disabled?"#e4e3ea":props.error?"#a9150b":"#080808"};
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input=({id,disabled,label,message,error,success,onChange,placeholder,...props})=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(StyledLabel,{children:(0,jsx_runtime.jsx)(StyledText,{disabled,error,children:label})}),(0,jsx_runtime.jsx)(StyledInput,{id,type:"text",onChange,disabled,error,success,placeholder,...props}),(0,jsx_runtime.jsx)(StyledMessage,{children:(0,jsx_runtime.jsx)(StyledText,{error,children:message})})]});Input.displayName="Input";const Input_Input=Input;try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}const Input_stories={component:Input_Input,title:"Librerizky/InputField",argTypes:{}},Primary=args=>(0,jsx_runtime.jsx)(Input_Input,{"data-testId":"InputField-id",...args});Primary.displayName="Primary",Primary.args={error:!1,disabled:!1,label:"Primary"};const Success=args=>(0,jsx_runtime.jsx)(Input_Input,{"data-testId":"InputField-id",...args});Success.displayName="Success",Success.args={error:!1,success:!0,disabled:!1,label:"Success"};const Error=args=>(0,jsx_runtime.jsx)(Input_Input,{"data-testId":"InputField-id",...args});Error.displayName="Error",Error.args={error:!0,disabled:!1,message:"Error"};const Disabled=args=>(0,jsx_runtime.jsx)(Input_Input,{"data-testId":"InputField-id",...args});Disabled.displayName="Disabled",Disabled.args={disabled:!0,label:"Disabled"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <Input data-testId='InputField-id' {...args} />",...Primary.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"args => <Input data-testId='InputField-id' {...args} />",...Success.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"args => <Input data-testId='InputField-id' {...args} />",...Error.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => <Input data-testId='InputField-id' {...args} />",...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Success","Error","Disabled"]}}]);
//# sourceMappingURL=components-Input-Input-stories.769866c3.iframe.bundle.js.map