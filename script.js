const divProjetos = document.getElementById('divProjetos');

const projetos = [
    {
        "id": 1,
        "imagem":"./src/img/WalletVisionPrototipo.png",
        "titulo":"Wallet Vision",
        "descricao":"Sistema capás de controlar o fluxo de dinheiro de uma pessoa. Com o Wallet Vision vocé pode gerenciar suas financas de uma maneira simples e eficiente.",
        "tecnologias":["Next.js", "TailwindCSS", "PHP", "MySQL", "Java"],
        "pagina": 1,
        "modal": false
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
document.getElementById('btnMbProjetos').addEventListener('click', () => {
    scrollTo('projetos');
});
document.getElementById('btnMbContato').addEventListener('click', () => {
    scrollTo('contato');
})
document.getElementById('btnMbHabilidades').addEventListener('click', () => {
    scrollTo('habilidades');
})
document.getElementById('btnMbSobre').addEventListener('click', () => {
    scrollTo('sobre');
});


projetos.forEach(e => {
    divProjetos.innerHTML += `<div class="cursor-default group flex flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-slate-800/50" id="projeto${e.id}"><div class="relative h-56 w-full"><div class="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-300 group-hover:scale-105"
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

projetos.forEach(e => {
  const card = document.getElementById(`projeto${e.id}`);
  if (card) {
    card.addEventListener('click', () => {
      openModal();
    });
  }
});

function scrollTo(local) {
    document.getElementById(local).scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnMenu');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!btn || !mobileMenu) return;

  const toggleMenu = (show) => {
    if (typeof show === 'boolean') {
      mobileMenu.classList.toggle('hidden', !show);
      btn.setAttribute('aria-expanded', String(show));
    } else {
      mobileMenu.classList.toggle('hidden');
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
    }
  };

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('hidden')) return;
    const isClickInside = mobileMenu.contains(e.target) || btn.contains(e.target);
    if (!isClickInside) toggleMenu(false);
  });
  mobileMenu.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', () => toggleMenu(false));
  });

  const mq = window.matchMedia('(min-width: 768px)');
  const handleResize = () => {
    if (mq.matches) {
      if (!mobileMenu.classList.contains('hidden')) toggleMenu(false);
    }
  };
  mq.addEventListener ? mq.addEventListener('change', handleResize) : window.addEventListener('resize', handleResize);

});

function openModal() {
  document.getElementById('popup-modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('popup-modal').classList.add('hidden');
}

// Fecha o modal ao clicar nos botões com data-modal-hide
document.querySelectorAll('[data-modal-hide="popup-modal"]').forEach(btn => {
  btn.addEventListener('click', closeModal);
});