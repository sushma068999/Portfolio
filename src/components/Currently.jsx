export function Currently() {

const cards = [
{
label:"NOW PLAYING",
title:"Slow Dancing In The Dark",
subtitle:"By Joji",
icon:"/vinyl.png",
},
{
label:"READING",
title:"Mice",
subtitle:"Gordon Reece",
icon:"/book.png",
},
{
label:"TEA COUNT",
title:"3 Cups Today",
subtitle:"Still functioning.",
icon:"/tea.png",
},
{
label:"JOURNALING",
title:"Planing LifeOS UI",
subtitle:"By a window.",
icon:"/laptop.png",
},
];

return(

<section
style={{
background:"#16352B",
padding:"7rem 5rem",
color:"white",
}}
>

<p
style={{
color:"#C8A96A",
letterSpacing:"3px",
marginBottom:"1rem",
}}
>
CURRENTLY
</p>

<h1
style={{
fontFamily:"Bodoni Moda",
fontSize:"4.5rem",
marginBottom:"1rem",
}}
>
Life Behind The Terminal
</h1>

<p
    style={{
        fontFamily: "Garamond Cormorant",
        fontSize: "1.35rem",
        color: "#c9d8d1",
        lineHeight: "2",
        marginBottom: "3rem",
    }}
>
    Here's a few things that quietly shaped my days outside the code editor.
</p>

<div
style={{
display: "grid",
gridTemplateColumns: "repeat(2,1fr)",
gap: "2rem",
}}
>

{cards.map(card=>(

<div
key={card.title}
style={{
    display:"flex",
    alignItems:"center",
    background:
        "linear-gradient(135deg,#203A31,#27463B)",
    borderRadius: "12px",
    padding: "2rem",
    height: "220px",
    boxSizing: "border-box",
    gap: "1.5rem",
    overflow: "hidden",

    border: "1px solid rgba(255,255,255,.08)",
    boxShadow: "0 20px 45px rgba(0,0,0,.22)",
    transition: ".35s",
    cursor: "pointer",
}}

onMouseEnter={(e)=>{
e.currentTarget.style.transform="translateY(-6px)";
e.currentTarget.style.boxShadow="0 28px 55px rgba(0,0,0,.35)";
e.currentTarget.style.border="1px solid rgba(200,169,106,.35)";
}}

onMouseLeave={(e)=>{
e.currentTarget.style.transform="translateY(0)";
e.currentTarget.style.boxShadow="0 18px 40px rgba(0,0,0,.18)";
e.currentTarget.style.border="1px solid rgba(255,255,255,.08)";
}}

>

<div
style={{
width:"205px",
display:"flex",
justifyContent:"center",
alignItems:"center",
flexShrink:0,
}}
>

<img
src={card.icon}
style={{
width:"205px",
height:"209px",
objectFit:"contain",
}}
/>

</div>

<div>

<p
style={{
color:"#C8A96A",
letterSpacing:"2px",
fontSize:"1rem",
marginBottom:".5rem",
}}
>
{card.label}
</p>

<h2
style={{
fontFamily: "Garamond Cormorant",
margin:0,
fontSize:"2rem",
fontWeight:"600",
marginBottom:".3rem",
}}
>
{card.title}
</h2>

<p
style={{
fontFamily: "Garamond Cormorant",
margin:0,
color:"#c8d6cf",
}}
>
{card.subtitle}
</p>

</div>

</div>

))}

</div>

</section>

);

}
