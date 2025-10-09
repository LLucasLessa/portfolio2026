const divProjetos = document.getElementById('divProjetos');

const projetos = [
    {
        "imagem":"./src/img/LucasFoto.png",
        "titulo":"TESTE LUCAS",
        "descricao":"oiahsbdoiahsd joihpsoidhpaoshd huioashdjpo ahsopdhpoauihsd ophpashd poa",
        "tecnologias":["React", "Node.js", "PHP", "MySQL"],
        "pagina": 1
    }
];

document.getElementById('btnChecarProjetos').addEventListener('click', () => {
    scrollTo('projetos');
});
document.getElementById('btnProjetos').addEventListener('click', () => {
    scrollTo('projetos');
});
document.getElementById('btnContato').addEventListener('click', () => {
    scrollTo('contato');
})
document.getElementById('btnHabilidades').addEventListener('click', () => {
    scrollTo('habilidades');
})
document.getElementById('btnSobre').addEventListener('click', () => {
    scrollTo('sobre');
});

projetos.forEach(e => {
    divProjetos.innerHTML += `<div class="group flex flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-slate-800/50"><div class="relative h-56 w-full"><div class="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-300 group-hover:scale-105"
style='background-image: url(${e.imagem});'>
</div>
</div>
<div class="flex flex-1 flex-col p-6">
<h3 class="text-xl font-semibold text-slate-800 dark:text-white">${e.titulo}
</h3>
<p class="mt-2 flex-1 text-slate-600 dark:text-slate-300">${e.descricao}</p>
<div class="mt-4 flex flex-wrap gap-2">
${e.tecnologias.map(tecnologia => `<span class="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">${tecnologia}</span>`).join("")}
</div>
</div>
</div>`;
});

function scrollTo(local) {
    document.getElementById(local).scrollIntoView({ behavior: 'smooth' });
}