import{u as s,f as c}from"./index-CLZkEtbr.js";const i=(t,e,n)=>{const{data:a,isError:o,isLoading:r}=s({address:e,token:t});return{balance:a?c(a.value.toString(),n):"0",isError:o,isLoading:r}};export{i as u};