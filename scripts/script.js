// Adição de
const canva = document.querySelector("#canva");
const modal = document.querySelector("#modal-element");
const modalBodyContent = document.querySelector("#modal-body");
const closeModal = document.querySelector("#modal-close");
const mainContentBody = document.querySelector("#main-content-body");

const explanationCard = document.querySelector("#explanation-card");
const footer = document.querySelector("#footer");

closeModal.onclick = function () {
  modal.style.display = "none";
};

function addFooter() {
  canva.insertAdjacentHTML(
    "afterend",
    `<div class="explanation-card" id="explanation-card">
        <p>
          É importante ressaltar que esses tópicos são apenas sugestões de
          estudo. A prioridade e ordem de cada tópico vai variar de acordo com
          seu dia a dia. Os tópicos de <span class="highlight">Lógica</span> e
          <span class="highlight">Conceitos</span> são os mais importantes e se
          aplicam independente de qual será sua preferência, seja back ou front.
          Outros Por fim, para melhor direcionamento, ter um roadmap é muito
          importante para direcionar seus estudos. E como sugestão para se
          aprofundar:
        </p>
        <div>
          <a href="https://roadmap.sh/">Roadmap</a>
          <i class="fa-solid fa-arrow-right"></i> Link para roadmaps por área
        </div>
        <div>
          <a href="https://refactoring.guru/design-patterns"
            >Refactoring Guru</a
          >
          <i class="fa-solid fa-arrow-right"></i> Padrões de projeto (e também
          de onde algumas imagens foram tiradas :P)
        </div>
      </div>
    </main>
    <footer id="footer">
      <p>
        Todos os direitos de imagens pertencem aos seus respectivos donos. Esse
        é um projeto sem fins lucrativos, apenas como uma forma de carinho e
        contribuição com a comunidade de desenvolvimento.
      </p>
      <p>Arthur Gomes 2024</p>
      <div class="gemini-powered-by">
        <span class='highlighted-light'>powered by</span>
        <img src="./assets/google-gemini.png" class="gemini-logo"/>
      </div>
    </footer>`
  );
}

function updateCanva(sectionForRemoval) {
  canva.removeChild(sectionForRemoval);
  mainContentBody.classList.add("fading-animation");

  canva.insertAdjacentHTML(
    "afterbegin",
    `
      <h2 class="content-title">
        Aqui estão alguns temas que podem te interessar
      </h2>
      <div class="filter-button-row">
        <button
          data-selected="false"
          class="button filter-button"
          onclick="filterTechList('Concepts')"
          id="concepts"
        >
          Conceitos
        </button>
        <button
          data-selected="false"
          class="button filter-button"
          onclick="filterTechList('Logic')"
          id="logic"
        >
          Lógica
        </button>
        <button
          data-selected="false"
          class="button filter-button"
          onclick="filterTechList('BackEnd')"
          id="backend"
        >
          Back-End
        </button>
        <button
          data-selected="false"
          class="button filter-button"
          onclick="filterTechList('FrontEnd')"
          id="frontend"
        >
          Front-End
        </button>
        <button
          data-selected="false"
          class="button filter-button"
          onclick="filterTechList('Libs')"
          id="libs"
        >
          Libs
        </button>
        <button
          data-selected="false"
          class="button filter-button"
          onclick="filterTechList('Frameworks')"
          id="frameworks"
        >
          Frameworks
        </button>
      </div>
      `
  );

  renderListOfTechTopics(data);
  addFooter();
}

function goToTechList() {
  const section = document.querySelector("#home-section");

  section.classList.add("moved");

  setTimeout(() => updateCanva(section), 1500);
}

function openModal(itemId) {
  const index = itemId - 1;
  modal.style.display = "block";

  const referencesList = data[index].references.map(
    (reference) =>
      `<li><a href="${reference}" target="_blank">${reference}</a></li>`
  );

  modalBodyContent.innerHTML = `
  <h2 class="tech-title">${data[index].title}</h2>
  
  <img class="tech-img" src="${data[index].imageUrl}" alt="${
    data[index].title
  }">
  
  <div class="tech-description">
    <p>${data[index].description}</p>
  </div>
  <div class="tech-references">
    <h3>Referências para estudo:</h3>
    <ul>${referencesList.join("")}</ul>
  </div>`;
}

function clearButtons() {
  const buttons = document.querySelectorAll(".filter-button");
  buttons.forEach((button) => button.classList.remove("active"));
}

function renderListOfTechTopics(list) {
  const techs = list.map(
    (item) =>
      `<div class="content-box" onclick="openModal(${item.id})">
          <div class="content-box__img">
            <img class="img-element" src="${item.imageUrl}" alt="${item.title}">
          </div>
          <span class="content-box__title">${item.title}</span>
        </div>`
  );

  mainContentBody.innerHTML = techs.join("");
}

function filterTechList(filterType) {
  const filteredTechs = data.filter((tech) => tech.type.includes(filterType));
  const selectedButton = document.querySelector(`#${filterType.toLowerCase()}`);

  if (selectedButton.classList.contains("active")) {
    selectedButton.classList.remove("active");
    renderListOfTechTopics(data);
    return;
  }

  clearButtons();

  selectedButton.classList.add("active");

  renderListOfTechTopics(filteredTechs);
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
