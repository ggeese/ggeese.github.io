import{r,T as b,a as f,j as e}from"./index-CEN3DYsf.js";import{f as v}from"./farm2-Bs0SplkR.js";import{g as N}from"./goldeng-CoULC7-3.js";const C=()=>{var d,i,x,h;const{currentAccount:c,DataUser:n}=r.useContext(b),{signatureSession:m}=r.useContext(f),[l,u]=r.useState([]),[a,p]=r.useState(null),[o,g]=r.useState([]);r.useEffect(()=>{const t=async()=>{try{console.log(n),p(n.user),u(n.BaseBalances||[]),console.log(l),g(n.comments||[])}catch(s){console.error("Error fetching user data:",s)}};c&&c.trim()!==""&&!a&&t()},[c,a,m]);const j={backgroundImage:`url(${v})`,backgroundSize:"cover",backgroundPosition:"center",filter:"blur(7px)",minHeight:"100vh"};return e.jsxs("div",{className:"relative min-h-screen",children:[e.jsx("div",{style:j,className:"absolute inset-0"}),e.jsx("div",{className:"relative z-10 bg-black bg-opacity-50 rounded-lg p-8 max-w-2xl mx-auto text-white shadow-2xl",children:a?e.jsxs("div",{className:"flex flex-col items-center space-y-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:a.profileImage||N,alt:"Profile",className:"w-32 h-32 rounded-full border-4 border-white shadow-lg mx-auto"}),e.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-transparent hover:border-yellow-300 transition duration-300"})]}),e.jsx("h2",{className:"text-3xl font-extrabold mt-4",children:a.username}),e.jsx("p",{className:"text-sm bg-gray-800 bg-opacity-70 p-2 rounded-lg shadow-inner mt-2",children:a.walletAddress})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Holdings on Base:"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-2",children:"ERC-20 Tokens"}),(d=l==null?void 0:l.result)!=null&&d.balances&&l.result.balances.filter(t=>{var s;return((s=t.asset)==null?void 0:s.type)==="erc20"}).length>0?l.result.balances.filter(t=>{var s;return((s=t.asset)==null?void 0:s.type)==="erc20"}).map((t,s)=>e.jsxs("div",{className:"bg-gray-800 bg-opacity-70 p-4 rounded-lg shadow-lg",children:[e.jsxs("p",{children:["Token: ",t.asset.groupId]}),e.jsxs("p",{children:["Balance: ",(parseFloat(t.value)/Math.pow(10,t.decimals)).toFixed(2)]})]},s)):e.jsx("p",{children:"No ERC-20 balances found."})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-2",children:"ERC-1155 Tokens"}),(i=l==null?void 0:l.result)!=null&&i.balances&&l.result.balances.filter(t=>{var s;return((s=t.asset)==null?void 0:s.type)==="erc1155"}).length>0?l.result.balances.filter(t=>{var s;return((s=t.asset)==null?void 0:s.type)==="erc1155"}).map((t,s)=>e.jsxs("div",{className:"bg-gray-800 bg-opacity-70 p-4 rounded-lg shadow-lg",children:[e.jsxs("p",{children:["Token: ",t.asset.groupId]}),e.jsxs("p",{children:["Balance: ",t.valueStr]})]},s)):e.jsx("p",{children:"No ERC-1155 balances found."})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-2",children:"ERC-721 Tokens"}),(x=l==null?void 0:l.result)!=null&&x.balances&&l.result.balances.filter(t=>{var s;return((s=t.asset)==null?void 0:s.type)==="erc721"}).length>0?l.result.balances.filter(t=>{var s;return((s=t.asset)==null?void 0:s.type)==="erc721"}).map((t,s)=>e.jsxs("div",{className:"bg-gray-800 bg-opacity-70 p-4 rounded-lg shadow-lg",children:[e.jsxs("p",{children:["Token: ",t.asset.groupId]}),e.jsxs("p",{children:["Balance: ",t.valueStr]})]},s)):e.jsx("p",{children:"No ERC-721 balances found."})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold mb-2",children:"Native Tokens"}),(h=l==null?void 0:l.result)!=null&&h.balances&&l.result.balances.filter(t=>{var s;return((s=t.asset)==null?void 0:s.type)==="native"}).length>0?l.result.balances.filter(t=>{var s;return((s=t.asset)==null?void 0:s.type)==="native"}).map((t,s)=>e.jsxs("div",{className:"bg-gray-800 bg-opacity-70 p-4 rounded-lg shadow-lg",children:[e.jsx("p",{children:"Token: Native"}),e.jsxs("p",{children:["Balance: ",(parseFloat(t.valueStr)/Math.pow(10,t.decimals)).toFixed(2)]})]},s)):e.jsx("p",{children:"No native balances found."})]})]})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Feed"}),e.jsx("div",{className:"space-y-4",children:o.length>0?o.map((t,s)=>e.jsxs("div",{className:"bg-gray-800 bg-opacity-70 p-4 rounded-lg shadow-lg",children:[e.jsx("p",{className:"text-sm",children:t.text}),e.jsx("p",{className:"text-xs text-gray-400 mt-2 text-right",children:t.date})]},s)):e.jsx("p",{children:"No comments yet."})})]})]}):e.jsx("p",{children:"Connect your wallet..."})})]})};export{C as default};