import{t as e}from"./createLucideIcon-CWs8XjN7.js";var t=e(`euro`,[[`path`,{d:`M4 10h12`,key:`1y6xl8`}],[`path`,{d:`M4 14h9`,key:`1loblj`}],[`path`,{d:`M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2`,key:`1j6lzo`}]]);function n(e){return e.toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/[^a-z0-9]+/g,`-`).replace(/(^-|-$)/g,``)}function r(e){let t=e.replace(/^\s*\/\s*(?=\n)/,``).replace(/\[([^\]]+)\]\(([^)]*\\+)\)/g,`$1`).split(`
`),n=[],r=!1;for(let e of t){let t=e.trim();if(/^#{2,6}\s/.test(t)){r=/waarom kies je voor fly-over/i.test(t),n.push(e);continue}if(r){if(!t){n.push(e);continue}if(t.startsWith(`|`)||t.startsWith(`![`)||t.startsWith(`>`)){r=!1,n.push(e);continue}n.push(`- ${t.replace(/^[-*]\s+/,``)}`);continue}if(/^[•·]\s*/.test(t)){n.length&&n[n.length-1]?.trim()===``&&/^- /.test(n[n.length-2]??``)&&n.pop(),n.push(`- ${t.replace(/^[•·]\s*/,``)}`);continue}let i=/^\*\*(.+?)\*\*:?$/.exec(t);if(i&&i[1]&&i[1].length<90){n.push(`### ${i[1].trim()}`);continue}n.push(e)}return n.join(`
`)}function i(e){let t=r(e).split(`
`),i=[],a={id:`intro`,title:null,body:``},o=[],s=new Set,c=()=>{let e=o.join(`
`).trim();(e||a.title)&&i.push({...a,body:e}),o.length=0};for(let e of t){let t=/^##\s+(.*)$/.exec(e.trim());if(t&&t[1]){c();let e=t[1].trim(),r=n(e)||`sectie-${i.length}`;for(;s.has(r);)r=`${r}-${i.length}`;s.add(r),a={id:r,title:e,body:``};continue}o.push(e)}return c(),i.filter(e=>e.title||e.body)}function a(e){return e?/prijs|prijzen|prijslijst|kosten|tarief|tarieven/i.test(e):!1}function o(e){return/^\s*\|/m.test(e.body)||a(e.title)}function s(e){return e.replace(/!\[[^\]]*\]\([^)]*\)/g,``).replace(/\n{3,}/g,`

`).trim()}function c(e){return e.replace(/####\s*Wat zeggen instructeurs over Fly-Over\?[\s\S]*?(?=\n##\s|$)/i,``).replace(/\n{3,}/g,`

`).trim()}function l(e){return e.replace(/^\s*\/\s*(?=\n|!\[)/,``).replace(/\n##\s*Solliciteer direct![\s\S]*$/i,`
`).trim()}function u(e){let t=[],n=/!\[([^\]]*)\]\(([^)\s]+)[^)]*\)/g,r;for(;r=n.exec(e);)t.push({alt:r[1]??``,src:r[2]??``});return{images:t,body:s(e)}}function d(e){let t=r(e).split(`
`),n=[],i=[],a=!1;for(let e of t){let t=e.trim();if(/^#{2,6}\s/.test(t)){if(a=/waarom kies je voor fly-over/i.test(t),a)continue;n.push(e);continue}if(a){if(!t)continue;if(/^-\s+/.test(t)){i.push(t.replace(/^-\s+/,``));continue}a=!1}n.push(e)}return{items:i,body:n.join(`
`).replace(/\n{3,}/g,`

`).trim()}}function f(e){return e?/hoe verloopt/i.test(e)||/examen/i.test(e):!1}export{a,s as c,f as i,c as l,d as n,i as o,o as r,l as s,u as t,t as u};