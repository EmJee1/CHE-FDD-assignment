<script lang="ts" setup>
import { ref } from "#imports";
import wireframeContentPage from "~/assets/wireframe-content-page.png";

const wireframeToggled = ref(false);
</script>

<template>
  <div class="content-page">
    <h1 class="title">Wireframe</h1>
    <p class="content">
      Wireframes kunnen gewoonlijk in 3 categorieën worden verdeeld
    </p>
    <ol class="content">
      <li>
        Low fidelity is een wireframe wat een heel simpele layout schetst. Bij
        mij is dit vergelijkbaar met het
        <UrlLink to="/paper-prototype-sitemap-and-moodboard">
          paper prototype
        </UrlLink>
        .
      </li>
      <li>
        Medium fidelity is een wireframe met meer detail dan low fidelity, maar
        het mist nog steeds visuele details. Denk daarbij aan bijvoorbeeld
        schaduwen, kleuren en afgeronde hoekjes.
      </li>
      <li>
        High fidelity is een wireframe wat hetzelfde is, of tenminste heel erg
        lijkt op het eindproduct. Dit wireframe is wat developers gebruiken om
        te bouwen, mijn high fidelity wireframe (ook wel design) is te vinden op
        <UrlLink to="/design">de design pagina</UrlLink>.
      </li>
    </ol>
    <PrimaryButton
      class="content"
      icon="fa-solid fa-window-maximize"
      @click="wireframeToggled = !wireframeToggled"
    >
      Meer over wireframe
    </PrimaryButton>

    <h2 class="content">Testrapport</h2>
    <p class="content">
      Een goed wireframe / design moet je testen, het liefst zo vaak mogelijk en
      met zoveel mogelijk gebruikers. Zo kom je achter verbeteringen zonder dat
      het al verder uitgedacht, of zelfs al ontwikkeld is. In
      <UrlLink to="/target-audience">het bepalen van de doelgroep</UrlLink> zijn
      we erachter gekomen dat de doelgroep bestaat uit 3 groepen. Voor alle
      informatie over de testen en verwerkte feedback verwijs ik door naar
      <UrlLink to="/testreport.pdf" external>het testrapport</UrlLink>.
    </p>

    <Transition name="slide-top">
      <Modal
        v-if="wireframeToggled"
        title="Wireframe"
        @close="wireframeToggled = false"
      >
        <img
          class="content"
          :src="wireframeContentPage"
          alt="wireframe content pagina"
        />
        <p class="content">
          In voorgaande projecten heb ik nooit eerder wireframes gebruikt. Ik
          begon altijd direct in Figma of Adobe XD aan het high-fidelity design,
          wat soms best veel tijd kostte. Ik merk nu bij het design dat ik
          sneller voortgang boek doordat ik het medium fidelity wireframe al
          eerder maak.
        </p>
        <p class="content">
          Dit wireframe is gemaakt door het idee wat ik had in mijn paper
          prototype nog wat verder uit te diepen. Na wat specifiekere en
          gedetailleerde schetsen gemaakt te hebben was ik klaar voor Figma (het
          design).
        </p>
        <UrlLink class="content" external to="/medium-fidelity-wireframe.pdf">
          Download Paper Prototype
        </UrlLink>
      </Modal>
    </Transition>
  </div>
</template>
